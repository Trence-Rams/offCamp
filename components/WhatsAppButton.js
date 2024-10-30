import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-ico-social-media";
import WhatsAppButtonStyles from "../styles/WhatsAppButtonStyles";

const WhatsAppButton = ({ onPress, SelectedResidence }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(SelectedResidence)}
      style={WhatsAppButtonStyles.buttonContainer}
    >
      <Icon name="whatsapp" height="20" width="20" />
      <Text style={WhatsAppButtonStyles.buttonText}>WhatsApp</Text>
    </TouchableOpacity>
  );
};

export default WhatsAppButton;
