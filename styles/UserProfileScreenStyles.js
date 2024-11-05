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
  signOutButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 30,
    padding: 20,
  },
  addPhotoButton: {
    position: "absolute",
    top: 20,
    right: 120,
  },
  photoText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  photoHint: {
    color: "#d3d3d3",
    textAlign: "center",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  editText: {
    color: "#252525",
    fontSize: 16,
  },
});

export default UserProfileScreenStyles;
