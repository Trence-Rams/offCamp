import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SignInScreenStyles from "../styles/SignInScreenStyles";

const SignInScreen = () => {
  return (
    <View style={SignInScreenStyles.container}>
      <Text style={SignInScreenStyles.title}>Sign In</Text>
      <Text style={SignInScreenStyles.subtitle}>
        Save time by linking your social account.
      </Text>

      <TouchableOpacity style={SignInScreenStyles.googleButton}>
        <Image
          source={require("../assets/google-icon.png")}
          style={SignInScreenStyles.icon}
        />
        <Text style={SignInScreenStyles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={SignInScreenStyles.orText}>OR</Text>

      <TouchableOpacity style={SignInScreenStyles.facebookButton}>
        <Image
          source={require("../assets/facebook-icon.png")}
          style={SignInScreenStyles.icon}
        />
        <Text style={SignInScreenStyles.buttonText}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
