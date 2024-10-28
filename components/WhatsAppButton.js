import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-ico-social-media";

const WhatsAppButton = ({ onPress, cellNumber, product }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(cellNumber, product)}
      style={{
        backgroundColor: "#fff",
        width: 130,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#25D366",
        flexDirection: "row",
        gap: 3,
        elevation: 1,
        alignItems: "center",
        padding: 5,
      }}
    >
      <Icon name="whatsapp" height="20" width="20" />
      <Text
        style={{
          flex: 1,
          color: "#25D366",
          fontSize: 18,
          alignSelf: "center",
          textAlignVertical: "center",
          gap: 5,
        }}
      >
        WhatsApp
      </Text>
    </TouchableOpacity>
  );
};

export default WhatsAppButton;
