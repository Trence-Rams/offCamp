import React, { useState, useRef, useCallback } from "react";
import { Animated, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { getDistance } from "../utils/getDistance";
import ProductItem from "../components/ProductItem";
import AnimatedHeader from "../components/AnimatedHeader";
import ProductModal from "../components/ProductModal";
import HomeScreenStyles from "../styles/HomeScreenStyles";

const products = require("C:/Users/Terrence/Downloads/MobileApp/data/offCampRes.json");
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
    <SafeAreaView style={HomeScreenStyles.container}>
      <AnimatedHeader
        scrollY={scrollY}
        isSignedIn={isSignedIn}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Animated.FlatList
        contentContainerStyle={HomeScreenStyles.flatListContent}
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      <ProductModal
        isVisible={!!selectedProduct}
        selectedProduct={selectedProduct}
        rating={rating}
        setRating={setRating}
        distance={distance}
        closeModal={closeModal}
        navigation={navigation}
        API_KEY={API_KEY}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
