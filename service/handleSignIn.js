import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAuth } from "../context/AuthContext";

export const handleSignIn = (email, password, navigation, setError) => {
  const { signIn } = useAuth();
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
