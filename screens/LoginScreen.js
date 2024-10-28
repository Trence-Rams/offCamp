import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {error && (
        <Text style={styles.errorText}>
          Please fill in the correct email or password.
        </Text>
      )}
      <Button
        onPress={handleSignIn}
        title="Sign in"
        buttonStyle={styles.signInButton}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text>-OR-</Text>
      </View>
      <View style={styles.registerContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
          <Text style={styles.registerText}>Register here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 100,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: "black",
    width: 350,
    borderRadius: 20,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "blue",
  },
  orContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: "row",
  },
  registerText: {
    color: "blue",
  },
});

export default LoginScreen;
