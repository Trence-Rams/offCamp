import React, { useState, useRef, useCallback } from "react";
import { Animated, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { getDistance } from "../utils/getDistance";
import ResidenceCard from "../components/ResidenceCard";
import AnimatedHeader from "../components/AnimatedHeader";
import ResidenceModal from "../components/ResidenceModal";
import HomeScreenStyles from "../styles/HomeScreenStyles";

const Residences = require("C:/Users/Terrence/Downloads/MobileApp/data/offCampRes.json");
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResidence, setSelectedResidence] = useState(null);
  const [rating, setRating] = useState(0);
  const [distance, setDistance] = useState(0);
  const { isSignedIn } = useAuth();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleResidencePress = useCallback(async (Residence) => {
    setSelectedResidence(Residence);
    const distance = await getDistance(Residence.Street_Address);
    setDistance(distance);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedResidence(null);
    setDistance(0);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ResidenceCard
        item={item}
        onPress={handleResidencePress}
        rating={rating}
      />
    ),
    [handleResidencePress, rating]
  );

  const filteredResidences = Residences.filter((Residence) => {
    return Residence.Residence_Name.toLowerCase().includes(
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
        data={filteredResidences}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      <ResidenceModal
        isVisible={!!selectedResidence}
        selectedResidence={selectedResidence}
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
