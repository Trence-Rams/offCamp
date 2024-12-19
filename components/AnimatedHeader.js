import React from "react";
import { Animated, Text } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AnimatedHeaderStyles from "../styles/AnimatedHeaderStyles";

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
      style={[
        AnimatedHeaderStyles.animatedView,
        { transform: [{ translateY: headerTranslateY }] },
      ]}
    >
      {isSignedIn ? (
        <IconButton
          icon="account-circle"
          iconColor="#fc8e53"
          size={60}
          onPress={() => navigation.navigate("Account")}
          style={AnimatedHeaderStyles.accountIcon}
        />
      ) : (
        <Button
          title="Sign in"
          onPress={() => navigation.navigate("Sign in")}
          buttonStyle={AnimatedHeaderStyles.signInButton}
        />
      )}

      <Text style={AnimatedHeaderStyles.HeaderText}>
        OffCampus{"\n"}accommodation at your{"\n"}fingertips.
      </Text>

      <Searchbar
        placeholder="Search accommodation..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        elevation={5}
        style={AnimatedHeaderStyles.searchbar}
      />
    </Animated.View>
  );
};

export default AnimatedHeader;
