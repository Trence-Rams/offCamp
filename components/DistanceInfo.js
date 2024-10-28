import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const DistanceInfo = ({ distance }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        paddingVertical: 5,
        width: "100%",
      }}
    >
      <MaterialCommunityIcons name="map-marker-distance" size={20} />
      <Text>
        {distance ? `${distance} away from campus.` : "Distance unavailable."}
      </Text>
    </View>
  );
};

export default DistanceInfo;
