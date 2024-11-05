import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { handleSignIn } from "../service/handleSignIn";
import SignInScreenStyles from "../styles/SignInScreenStyles";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <SafeAreaView style={SignInScreenStyles.container}>
      <Text style={SignInScreenStyles.titleText}>Sign in</Text>
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
      {error && (
        <Text style={SignInScreenStyles.errorText}>
          Please fill in the correct email or password.
        </Text>
      )}
      <Button
        onPress={() => navigation.navigate("Account")}
        title="Sign in"
        buttonStyle={SignInScreenStyles.buttonStyle}
      />
      <TouchableOpacity>
        <Text style={SignInScreenStyles.forgotPasswordText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View style={SignInScreenStyles.separator}>
        <Text>-OR-</Text>
      </View>
      <View style={SignInScreenStyles.row}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
          <Text style={SignInScreenStyles.registerText}>Register here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
