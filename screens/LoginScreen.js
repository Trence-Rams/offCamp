import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Input, SocialIcon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginScreen_Styles from "../styles/LoginScreen_Styles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={LoginScreen_Styles.container}>
      <Text
        style={{
          alignItems: "flex-start",
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 100,
          marginTop: 100,
        }}
      >
        Sign in
      </Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button
        onPress={() => navigation.navigate("Account")}
        title="Sign in"
        buttonStyle={{
          backgroundColor: "#fc8e53",
          width: 350,
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <TouchableOpacity>
        <Text style={{ color: "blue" }}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text>-OR-</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
          <Text style={{ color: "blue" }}>Register here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
