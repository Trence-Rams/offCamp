import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SignUpScreenStyles from "../styles/SignUpScreenStyles";

const SignUpScreen = () => {
  return (
    <View style={SignUpScreenStyles.container}>
      <Text style={SignUpScreenStyles.title}>Create an account</Text>
      <Text style={SignUpScreenStyles.subtitle}>
        Save time by linking your social account.
      </Text>

      <TouchableOpacity style={SignUpScreenStyles.googleButton}>
        <Image
          source={require("../assets/google-icon.png")}
          style={SignUpScreenStyles.icon}
        />
        <Text style={SignUpScreenStyles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={SignUpScreenStyles.orText}>OR</Text>

      <TouchableOpacity style={SignUpScreenStyles.facebookButton}>
        <Image
          source={require("../assets/facebook-icon.png")}
          style={SignUpScreenStyles.icon}
        />
        <Text style={SignUpScreenStyles.buttonText}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
