import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAuth } from "../Context/AuthContext";
import LoginScreenStyles from "../styles/LoginScreenStyles";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        signIn();
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigation.navigate("Account");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <SafeAreaView style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Sign in</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {error && (
        <Text style={LoginScreenStyles.errorText}>
          Please fill in the correct email or password.
        </Text>
      )}
      <Button
        onPress={handleSignIn}
        title="Sign in"
        buttonStyle={LoginScreenStyles.signInButton}
      />
      <TouchableOpacity>
        <Text style={LoginScreenStyles.forgotPasswordText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View style={LoginScreenStyles.orContainer}>
        <Text>-OR-</Text>
      </View>
      <View style={LoginScreenStyles.registerContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
          <Text style={LoginScreenStyles.registerText}>Register here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
