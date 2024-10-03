import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Button } from "react-native-elements";
import { Searchbar, IconButton, Icon as Icon2 } from "react-native-paper";
import Icon from "react-native-ico-social-media";
import * as Linking from "expo-linking";
import { useAuth } from "../components/service/AuthContext";
import {
  UserRating,
  UserRating as UserRatingModal,
} from "../components/UserRating";

const universityLocation =
  "North-West University, Building F1, 11 Hoffman St, Potchefstroom, 2531";
const products = require("C:/Users/Terrence/Downloads/MobileApp/offCampRes.json");

const API_KEY = "AIzaSyCrSHEDzwvDXd3PN2zM7MnRGSweBw1uZQY";
const HomeScreen = () => {
  const { isSignedIn } = useAuth();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [location, setLocation] = useState(null);
  const [rating, setRating] = useState(0);
  const [distance, setDistance] = useState(0);

  const getDistance = async (origin, destination) => {
    const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";

    const url = `${baseUrl}?origins=${origin}&destinations=${destination}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        const element = data.rows[0].elements[0];
        const distance = element.distance.text;
        const duration = element.duration.text;

        console.log(`Distance: ${distance}, Duration: ${duration}`);
        setDistance(distance);
        return {
          distance,
          duration,
        };
      } else {
        console.log("Error fetching distance data:", data.status);
      }
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  const getDirections = async () => {
    const address = selectedProduct?.Street_Address;

    if (!address) {
      Alert.alert("Error", "Address not available.");
      return;
    }

    // Fetch coordinates directly using the address
    const location = await getCoordinates(address);

    if (!location) {
      Alert.alert(
        "Error",
        "Unable to retrieve location data, please try again later."
      );
      return;
    }

    const { latitude, longitude } = location;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    const destination = `${latitude},${longitude}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving&dir_action=navigate`;

    Linking.openURL(url);
  };

  const getCoordinates = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        // Extract latitude and longitude
        const { lat, lng } = data.results[0].geometry.location;

        // Check if the location is a building (ROOFTOP level accuracy)
        const locationType = data.results[0].geometry.location_type;

        if (locationType === "ROOFTOP") {
          console.log("Exact building found!");
        } else {
          console.log("Coordinates are not building-specific.");
        }

        return { latitude: lat, longitude: lng };
      } else {
        throw new Error("Unable to get coordinates");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const handleProductPress = useCallback((product) => {
    setSelectedProduct(product);
    getDistance(product.Street_Address, universityLocation);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const renderItem = useCallback(
    ({ item }) => <ProductItem item={item} onPress={handleProductPress} />,
    [handleProductPress]
  );

  const makePhoneCall = () => {
    let phoneNumber = selectedProduct.CellNumber;
    Linking.openURL(`tel:${phoneNumber}`).catch((err) => {
      console.error("Failed to open phone dialer:", err);
    });
  };

  const filteredProducts = products.filter((product) => {
    return product.Residence_Name.includes(searchQuery);
  });

  const openWhatsApp = async () => {
    // Remove the first character (index 0) from the phone number
    const phoneNumber = selectedProduct.CellNumber.slice(1);

    const message = `Hi,

I hope you're doing well. I'm interested in your student accommodation at ${selectedProduct?.Street_Address}, ${selectedProduct?.Residence_Name}. Could you please let me know if it's available for rent and provide any relevant details such as the price and terms?

Thank you, and I look forward to hearing from you.`;

    try {
      const formattedPhoneNumber = `+27${phoneNumber}`;

      const url = `whatsapp://send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("WhatsApp is not installed on your device");
      }
    } catch (error) {
      Alert.alert("Failed to send WhatsApp message", error.message);
    }
  };

  const ProductItem = React.memo(({ item }) => {
    const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${item.Street_Address}&key=${API_KEY}`;
    return (
      <TouchableOpacity
        style={HomeScreen_styles.item}
        onPress={() => handleProductPress(item)}
      >
        <Image
          source={{ uri: streetViewUrl }}
          style={HomeScreen_styles.image}
        />
        <Text style={HomeScreen_styles.name}>{item.Residence_Name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "#888" }}>
            {item.Accreditation_Number}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Text style={{ fontSize: 12, color: "#888" }}>
              {rating.toFixed(1)}
            </Text>
            <UserRating rating={rating} setRating={setRating} ratingCount={1} />
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -230],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={HomeScreen_styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: headerTranslateY }],
          zIndex: 1,
          position: "absolute",
          width: "100%",
          paddingTop: 10,
        }}
      >
        {isSignedIn ? (
          <IconButton
            icon="account-circle"
            iconColor="#fc8e53"
            size={60}
            onPress={() => navigation.navigate("Account")}
            style={{ alignSelf: "flex-end" }}
          />
        ) : (
          <Button
            title="Sign in"
            onPress={() => navigation.navigate("Sign in")}
            buttonStyle={{
              width: 100,
              borderRadius: 20,
              alignSelf: "flex-end",
              marginRight: 20,
              backgroundColor: "black",
              marginVertical: 25,
            }}
          />
        )}

        <Text style={HomeScreen_styles.sellingText}>
          OffCampus{"\n"}accomodation at your{"\n"}finger tips.
        </Text>

        <Searchbar
          placeholder="Search accomodation..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            width: 350,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
      </Animated.View>

      <Animated.FlatList
        contentContainerStyle={{
          paddingTop: 300,
          width: "100%",
        }}
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      <Modal
        visible={!!selectedProduct}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
        onBackdropPress={closeModal}
      >
        <View style={HomeScreen_styles.modalContainer}>
          <TouchableOpacity
            onPress={closeModal}
            style={{ alignSelf: "flex-end", padding: 5 }}
          >
            <MaterialCommunityIcons name="close" color="grey" size={25} />
          </TouchableOpacity>
          <ScrollView style={{ width: "95%", alignSelf: "center" }}>
            <View style={{ alignItems: "center", width: "100%" }}>
              <Image
                source={{
                  uri: `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${selectedProduct?.Street_Address}&key=${API_KEY}`,
                }}
                style={{ width: "100%", height: 200 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={HomeScreen_styles.ModalProductName}>
                    {selectedProduct?.Residence_Name}
                  </Text>

                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    {selectedProduct?.Accreditation_Number}
                  </Text>
                </View>
                <View style={{ marginRight: 15 }}>
                  <Text style={HomeScreen_styles.ModalProductLocation}>
                    <IconButton
                      icon="directions"
                      size={20}
                      onPress={async () => getDirections()}
                      iconColor="#4285F4"
                    />
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    Directions
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Text>{rating.toFixed(1)}</Text>
                <UserRatingModal
                  rating={rating}
                  setRating={setRating}
                  ratingCount={5}
                />
              </View>

              {distance ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                    paddingVertical: 5,
                    width: "100%",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker-distance"
                    size={20}
                  />
                  <Text>{distance} away from campus</Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                    paddingVertical: 5,
                    width: "100%",
                  }}
                >
                  {" "}
                  <MaterialCommunityIcons
                    name="map-marker-distance"
                    size={20}
                  />
                  <Text>Distance unavailable.</Text>
                </View>
              )}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={HomeScreen_styles.ModalProductDescriptionHeading}
                  >
                    Street address:
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductDescription}>
                    {selectedProduct?.Street_Address}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      closeModal();
                      navigation.navigate("StreetView", {
                        address: selectedProduct?.Street_Address,
                      });
                    }}
                  >
                    <MaterialCommunityIcons
                      name="google-street-view"
                      size={30}
                      color="#4285F4"
                    />
                    <Text style={HomeScreen_styles.ModalProductPrice}>
                      360 Street View
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              flex: 1,
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                makePhoneCall();
              }}
              style={{
                backgroundColor: "#fff",
                width: 130,
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#4285F4",
                elevation: 1,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "#4285F4",
                  fontSize: 18,
                  alignSelf: "center",
                  textAlignVertical: "center",
                  gap: 5,
                }}
              >
                <Icon2 source="phone" size={20} color="#4285F4" /> Call Owner
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWhatsApp();
              }}
              style={{
                backgroundColor: "#fff",
                width: 130,
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#25D366",
                elevation: 1,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "#25D366",
                  fontSize: 18,
                  alignSelf: "center",
                  textAlignVertical: "center",
                  gap: 5,
                }}
              >
                <Icon name="whatsapp" height="20" width="20" /> WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
