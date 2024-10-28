import React, { useState, useRef, useCallback } from "react";
import { Animated, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../Context/AuthContext";
import { getDistance } from "../Utils/getDistance";
import ProductItem from "../components/ProductItem";
import AnimatedHeader from "../components/AnimatedHeader";
import ProductModal from "../components/ProductModal";

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
    <SafeAreaView style={styles.container}>
      <AnimatedHeader
        scrollY={scrollY}
        isSignedIn={isSignedIn}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Animated.FlatList
        contentContainerStyle={styles.flatListContent}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: 300,
    width: "100%",
  },
});

export default HomeScreen;
