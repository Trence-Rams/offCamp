import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { getDirections } from "../utils/getDirections";
import DirectionsButtonStyles from "../styles/DirectionsButtonStyles";

const DirectionsButton = ({ address }) => {
  const handlePress = async () => {
    await getDirections(address);
  };

  return (
    <View style={DirectionsButtonStyles.container}>
      <View style={DirectionsButtonStyles.iconContainer}>
        <IconButton
          icon="directions"
          size={20}
          onPress={handlePress}
          iconColor="#4285F4"
        />
      </View>
      <Text style={DirectionsButtonStyles.text}>Directions</Text>
    </View>
  );
};

export default DirectionsButton;
