import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CallButtonStyles from "../styles/CallButtonStyles";

const CallButton = ({ onPress, cellNumber }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(cellNumber)}
      style={CallButtonStyles.buttonContainer}
    >
      <Icon name="call" size={20} color="#007BFF" />
      <Text style={CallButtonStyles.buttonText}>Call Owner</Text>
    </TouchableOpacity>
  );
};

export default CallButton;
