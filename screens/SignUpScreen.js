import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView } from "react-native";
import SignUpScreen_styles from "../styles/SignUpScreen_styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Ensure the correct path

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match, make sure both passwords match.");
      Alert.alert("Error", error, [{ text: "OK" }], { cancelable: false });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Navigate to Account screen or any other screen
        // Example: navigation.navigate('Account');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
        console.error("Sign in error:", errorMessage);
      });
  };

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
            onPress={handleSignUp}
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
