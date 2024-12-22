import { StyleSheet } from "react-native";

const AnimatedHeaderStyles = StyleSheet.create({
  animatedView: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    paddingTop: 10,
  },
  accountIcon: {
    alignSelf: "flex-end",
  },
  signInButton: {
    width: 100,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginRight: 20,
    backgroundColor: "#007BFF",
    marginVertical: 25,
  },
  searchbar: {
    width: 350,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  HeaderText: {
    fontSize: 32,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: "left",
    color: "#333",
    fontWeight: "bold",
  },
});

export default AnimatedHeaderStyles;
