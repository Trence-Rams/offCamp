import React from "react";
import { Animated, Text } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";
import { Button } from "react-native-elements";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { useNavigation } from "@react-navigation/native";

const AnimatedHeader = ({
  scrollY,
  isSignedIn,
  searchQuery,
  setSearchQuery,
}) => {
  const navigation = useNavigation();

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -230],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateY: headerTranslateY }],
        zIndex: 1,
        position: "absolute",
        width: "100%",
        paddingTop: 10,
      }}
    >
      {isSignedIn ? (
        <IconButton
          icon="account-circle"
          iconColor="#fc8e53"
          size={60}
          onPress={() => navigation.navigate("Account")}
          style={{ alignSelf: "flex-end" }}
        />
      ) : (
        <Button
          title="Sign in"
          onPress={() => navigation.navigate("Sign in")}
          buttonStyle={{
            width: 100,
            borderRadius: 20,
            alignSelf: "flex-end",
            marginRight: 20,
            backgroundColor: "black",
            marginVertical: 25,
          }}
        />
      )}

      <Text style={HomeScreen_styles.sellingText}>
        OffCampus{"\n"}accommodation at your{"\n"}fingertips.
      </Text>

      <Searchbar
        placeholder="Search accommodation..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          width: 350,
          alignSelf: "center",
          marginBottom: 20,
        }}
      />
    </Animated.View>
  );
};

export default AnimatedHeader;
