import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import DistanceInfoStyles from "../styles/DistanceInfoStyles";

const DistanceInfo = ({ distance }) => {
  return (
    <View style={DistanceInfoStyles.container}>
      <MaterialCommunityIcons name="map-marker-distance" size={20} />
      <Text style={DistanceInfoStyles.text}>
        {distance ? `${distance} away from campus.` : "Distance unavailable."}
      </Text>
    </View>
  );
};

export default DistanceInfo;
