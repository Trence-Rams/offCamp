import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Input, SocialIcon } from "react-native-elements";
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
              marginBottom: 50,
              marginTop: 50,
            }}
          >
            Create account
          </Text>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Confirm Password" secureTextEntry />
          <Button
            title="Create"
            buttonStyle={{
              backgroundColor: "#fc8e53",
              width: 350,
              borderRadius: 20,
            }}
          />
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text>-OR-</Text>
          </View>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Sign in with</Text>
          <View
            style={{
              flexDirection: "row",
              width: 250,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity>
              <SocialIcon type="google" light />
            </TouchableOpacity>
            <TouchableOpacity>
              <SocialIcon type="facebook" light />
            </TouchableOpacity>
            <TouchableOpacity>
              <SocialIcon type="twitter" light />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
