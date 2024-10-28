import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
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

export default LoginScreenStyles;
