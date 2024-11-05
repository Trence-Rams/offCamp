import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView } from "react-native";
import SignUpScreenStyles from "../styles/SignUpScreenStyles";
import { handleSignUp } from "../service/handleSignUp";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={SignUpScreenStyles.container}>
      <ScrollView>
        <View style={SignUpScreenStyles.centerContent}>
          <Text style={SignUpScreenStyles.titleText}>Create account</Text>
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
              handleSignUp(password, confirmPassword, email, username)
            }
            buttonStyle={SignUpScreenStyles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
