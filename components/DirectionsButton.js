// DirectionsButton.js
import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { getDirections } from "../Utils/getDirections";
import HomeScreen_styles from "../styles/HomeScreen_styles";

const DirectionsButton = ({ address }) => {
  const handlePress = async () => {
    await getDirections(address);
  };

  return (
    <View style={{ alignItems: "center", flexDirection: "column" }}>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#4285F4",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <IconButton
          icon="directions"
          size={20}
          onPress={handlePress}
          iconColor="#4285F4"
        />
      </View>
      <Text style={HomeScreen_styles.ModalProductPrice}>Directions</Text>
    </View>
  );
};

export default DirectionsButton;
