import React from "react";
import { Appbar, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HeaderComponent = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header
      style={{
        backgroundColor: "#F4A750",
        elevation: 2,
        justifyContent: "space-around",
      }}
    >
      <Appbar.Action
        icon="arrow-left"
        color="#fff"
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content
        title="Chat"
        titleStyle={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}
        style={{ alignItems: "center" }}
      />
      <TouchableOpacity>
        <Avatar.Image
          size={40}
          source={{ uri: "https://source.unsplash.com/300x300/" }}
          style={{ marginRight: 10 }}
          onTouchEnd={() => navigation.navigate("Profile")}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

export default HeaderComponent;
