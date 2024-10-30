import { StyleSheet } from "react-native";

const UserProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 0,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    padding: 20,
  },

  photoText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  infoContainer: {
    margin: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    paddingHorizontal: 10,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default UserProfileScreenStyles;
