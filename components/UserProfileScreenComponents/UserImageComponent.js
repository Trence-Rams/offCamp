import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

const UserImageComponent = () => {
  return (
    <View
      style={{
        marginVertical: 8,
        width: 250,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        padding: 20,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => {}} style={{ alignItems: "flex-end" }}>
          <Icon color="#4d5963" source="pencil" size={20} />
        </TouchableOpacity>
        <Icon source="account-circle" size={130} color="#adadad" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: 100 }}>Welcome</Text>
        <Text style={{ fontSize: 20, fontWeight: 500, color: "#4d5963" }}>
          Terrence
        </Text>
      </View>
    </View>
  );
};
export default UserImageComponent;
