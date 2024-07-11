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
import { Searchbar } from "react-native-paper";
import products from "../products";
import Icon from "react-native-ico-social-media";
import * as Linking from "expo-linking";
import { IconButton } from "react-native-paper";
import * as Location from "expo-location";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      let locationInfo = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      setLocationName(locationInfo[0].city);
    })();
  }, []);

  const getDirections = () => {
    if (!location) {
      console.log("Location data not yet available");
      return;
    }

    const { latitude, longitude } = location;
    const destination = `${latitude},${longitude}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving&dir_action=navigate`;

    Linking.openURL(url);
  };

  const handleProductPress = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const renderItem = useCallback(
    ({ item }) => <ProductItem item={item} onPress={handleProductPress} />,
    [handleProductPress]
  );

  const openWhatsApp = async () => {
    const phoneNumber = "0636648338";
    const message = `Hi Terrence,

Hope this message finds you well. I am interested in the ${
      selectedProduct?.name
    } that you have listed on Mo-Bi app for selling with the following details:

${"\u2022"} Price: ${selectedProduct?.price}
${"\u2022"} Location: ${selectedProduct?.location}
${"\u2022"} Description: ${selectedProduct?.details}
     
I look forward to your response.`;

    try {
      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("WhatsApp is not installed on your device");
      }
    } catch (error) {
      Alert.alert("Failed to share image", error.message);
    }
  };

  const ProductItem = React.memo(({ item }) => (
    <TouchableOpacity
      style={HomeScreen_styles.item}
      onPress={() => handleProductPress(item)}
    >
      <Image
        source={{
          uri: `https://picsum.photos/300/300?${item.name}'`,
        }}
        style={HomeScreen_styles.image}
      />
      <Text style={HomeScreen_styles.name}>{item.name}</Text>
      <Text style={HomeScreen_styles.price}>{item.price}</Text>
    </TouchableOpacity>
  ));

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -190],
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
        <Button
          onPress={() => navigation.navigate("Sign in")}
          title="Sign in"
          buttonStyle={{
            width: 100,
            borderRadius: 20,
            alignSelf: "flex-end",
            marginRight: 20,
            backgroundColor: "#fc8e53",
          }}
        />
        <Text style={HomeScreen_styles.sellingText}>
          Discover{"\n"}amazing used{"\n"}products.
        </Text>
        <Searchbar
          placeholder="Search product..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            width: 350,
            alignSelf: "center",
            marginVertical: 30,
          }}
        />
      </Animated.View>

      <Animated.FlatList
        contentContainerStyle={{ paddingTop: 300, alignSelf: "center" }}
        data={products}
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
                source={{ uri: `https://picsum.photos/300/300?` }}
                style={HomeScreen_styles.modalImage}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View>
                  <Text style={HomeScreen_styles.ModalProductName}>
                    {selectedProduct?.name}
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    {selectedProduct?.price}
                  </Text>
                </View>
                <View>
                  <Text style={HomeScreen_styles.ModalProductLocation}>
                    <IconButton
                      icon="directions"
                      size={20}
                      onPress={() => getDirections()}
                    />
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    {locationName}
                  </Text>
                </View>
              </View>

              <View style={{ width: "100%" }}>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>
                  Comments:
                </Text>
                <Text style={HomeScreen_styles.ModalProductDescription}>
                  {selectedProduct?.details}
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              closeModal();
              openWhatsApp();
            }}
            style={{
              backgroundColor: "#fff",
              width: 200,
              height: 40,
              borderRadius: 20,
              marginTop: 20,
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
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
