import { StyleSheet } from "react-native";

const SignInScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleText: {
    alignItems: "flex-start",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 100,
    marginTop: 100,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "#007BFF",
    width: 340,
    borderRadius: 20,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#4285F4",
  },
  separator: {
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  registerText: {
    color: "#4285F4",
  },
});

export default SignInScreenStyles;
