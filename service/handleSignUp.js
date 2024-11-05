import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { db, auth } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { Alert } from "react-native";

export const handleSignUp = (password, confirmPassword, email, username) => {
  if (password !== confirmPassword) {
    Alert.alert(
      "Error",
      "Passwords do not match, make sure both passwords match.",
      [{ text: "OK" }],
      { cancelable: false }
    );
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;

      // Send verification email
      sendEmailVerification(user)
        .then(() => {
          console.log("Verification email sent.");
          Alert.alert(
            "Success",
            "Account created! Please check your email to verify your account.",
            [{ text: "OK" }]
          );
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
          Alert.alert(
            "Error",
            "Failed to send verification email. Please try again."
          );
        });

      try {
        await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: email,
          whatsappNumber: whatsappNumber,
        });
      } catch (error) {
        console.error("Error saving user details to Firestore:", error);
        Alert.alert("Error", "Failed to save user details. Please try again.");
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
      console.error("Sign up error:", errorMessage);
    });
};
