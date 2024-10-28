// CallButton.js
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CallButton = ({ onPress, cellNumber }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(cellNumber)}
      style={{
        backgroundColor: "#fff",
        width: 130,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#4285F4",
        flexDirection: "row",
        gap: 3,
        elevation: 1,
        alignItems: "center",
        padding: 5,
      }}
    >
      <Icon name="call" size={20} color="#4285F4" />
      <Text
        style={{
          flex: 1,
          color: "#4285F4",
          fontSize: 18,
          alignSelf: "center",
          textAlignVertical: "center",
          gap: 5,
        }}
      >
        Call Owner
      </Text>
    </TouchableOpacity>
  );
};

export default CallButton;
