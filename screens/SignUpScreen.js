import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import SignUpScreen_styles from "../styles/SignUpScreen_styles";
import { ScrollView } from "react-native";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={SignUpScreen_styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              alignItems: "flex-start",
              fontWeight: "bold",
              fontSize: 30,
              marginBottom: 80,
              marginTop: 50,
            }}
          >
            Create account
          </Text>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="WhatsApp number" />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Confirm Password" secureTextEntry />
          <Button
            title="Create"
            buttonStyle={{
              backgroundColor: "#fc8e53",
              width: 350,
              borderRadius: 20,
              marginTop: 50,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
