import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const StreetViewButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name="google-street-view"
          size={30}
          color="#4285F4"
        />
        <Text style={{ color: "#888" }}>360 Street View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StreetViewButton;
