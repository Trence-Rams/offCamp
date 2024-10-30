import { StyleSheet } from "react-native";

const DirectionsButtonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#4285F4",
    alignItems: "center",
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
});

export default DirectionsButtonStyles;
