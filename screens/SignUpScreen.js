import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView } from "react-native";
import SignUpScreen_styles from "../styles/SignUpScreen_styles";
import { handleSignUp } from "../firebase/CRUDServices/handleSignUp";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          <Input
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Input
            placeholder="WhatsApp number"
            onChangeText={(text) => setWhatsappNumber(text)}
            value={whatsappNumber}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <Button
            title="Create"
            onPress={() =>
              handleSignUp(
                password,
                confirmPassword,
                email,
                username,
                whatsappNumber
              )
            }
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
