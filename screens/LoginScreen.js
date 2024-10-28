import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginScreen_Styles from "../styles/LoginScreen_Styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../Context/AuthContext";

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
        <Text style={{ color: "red", marginBottom: 10 }}>
          Please fill in the correct email or password.
        </Text>
      )}
      <Button
        onPress={handleSignIn}
        title="Sign in"
        buttonStyle={{
          backgroundColor: "black",
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
