import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import StreetViewButtonStyles from "../styles/StreetViewButtonStyles";

const StreetViewButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={StreetViewButtonStyles.buttonContainer}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name="google-street-view"
          size={30}
          color="#007BFF"
        />
        <Text style={StreetViewButtonStyles.buttonText}>360 Street View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StreetViewButton;
