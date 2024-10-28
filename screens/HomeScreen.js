import React, { useState, useRef, useCallback } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Button } from "react-native-elements";
import { Searchbar, IconButton } from "react-native-paper";
import { useAuth } from "../components/service/AuthContext";
import { UserRating as UserRatingModal } from "../components/UserRating";
import { getDirections } from "../Utils/getDirections";
import { makePhoneCall } from "../Utils/makePhoneCall";
import { openWhatsApp } from "../Utils/openWhatsApp";
import { getDistance } from "../Utils/getDistance";
import ProductItem from "../components/ProductItem";
import CallButton from "../components/CallButton";
import WhatsAppButton from "../components/WhatsAppButton";

const products = require("C:/Users/Terrence/Downloads/MobileApp/offCampRes.json");
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [distance, setDistance] = useState(0);
  const { isSignedIn } = useAuth();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleProductPress = useCallback(async (product) => {
    setSelectedProduct(product);
    const distance = await getDistance(product.Street_Address);
    setDistance(distance);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
    setDistance(0);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ProductItem item={item} onPress={handleProductPress} rating={rating} />
    ),
    [handleProductPress, rating]
  );

  const filteredProducts = products.filter((product) => {
    return product.Residence_Name.includes(searchQuery);
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
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: "#4285F4",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <IconButton
                      icon="directions"
                      size={20}
                      onPress={async () =>
                        getDirections(selectedProduct.Street_Address)
                      }
                      iconColor="#4285F4"
                    />
                  </View>
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
                  <Text>{distance} away from campus.</Text>
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
            <CallButton
              onPress={makePhoneCall}
              cellNumber={selectedProduct?.CellNumber}
            />
            <WhatsAppButton
              onPress={openWhatsApp}
              cellNumber={selectedProduct?.CellNumber}
              product={selectedProduct}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
