import { StyleSheet } from "react-native";

const WhatsAppButtonStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#fff",
    width: 130,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#25D366",
    flexDirection: "row",
    gap: 3,
    elevation: 1,
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    flex: 1,
    color: "#25D366",
    fontSize: 18,
    alignSelf: "center",
    textAlignVertical: "center",
    gap: 5,
  },
});

export default WhatsAppButtonStyles;
