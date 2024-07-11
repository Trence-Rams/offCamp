import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Badge, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MessageButtonComponent = () => {
  const navigation = useNavigation();

  const nevigateToProducts = useCallback(() => {
    navigation.navigate("Products");
  }, []);

  const nevigateToHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <View>
        <Badge>2</Badge>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 8,
            elevation: 5,
            width: 100,
            height: 70,
            marginTop: 5,
          }}
        >
          <Icon
            color="#4d5963"
            source="comment-text-multiple-outline"
            size={35}
          />
          <Text>WhatsApp</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 8,
          elevation: 5,
          width: 100,
          height: 70,
        }}
        onPress={nevigateToProducts}
      >
        <Icon color="#4d5963" source="package" size={35} />
        <Text>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 8,
          elevation: 5,
          width: 100,
          height: 70,
        }}
        onPress={nevigateToHome}
      >
        <Icon color="#4d5963" source="logout" size={35} />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MessageButtonComponent;
