import { StyleSheet } from "react-native";

const CallButtonStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#fff",
    width: 130,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#007BFF",
    flexDirection: "row",
    elevation: 1,
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    flex: 1,
    color: "#007BFF",
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default CallButtonStyles;
