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
import { useAuth } from "../components/service/AuthContext";
import { UserRating as UserRatingModal } from "../components/UserRating";
import { makePhoneCall } from "../Utils/makePhoneCall";
import { openWhatsApp } from "../Utils/openWhatsApp";
import { getDistance } from "../Utils/getDistance";
import ProductItem from "../components/ProductItem";
import CallButton from "../components/CallButton";
import WhatsAppButton from "../components/WhatsAppButton";
import StreetViewButton from "../components/StreetViewButton";
import DistanceInfo from "../components/DistanceInfo";
import DirectionsButton from "../components/DirectionsButton";
import AnimatedHeader from "../components/AnimatedHeader";

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
    return product.Residence_Name.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
  });

  return (
    <SafeAreaView style={HomeScreen_styles.container}>
      <AnimatedHeader
        scrollY={scrollY}
        isSignedIn={isSignedIn}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

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
                <DirectionsButton address={selectedProduct?.Street_Address} />
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
              <DistanceInfo distance={distance} />
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
                <StreetViewButton
                  onPress={() => {
                    closeModal();
                    navigation.navigate("StreetView", {
                      address: selectedProduct?.Street_Address,
                    });
                  }}
                />
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
