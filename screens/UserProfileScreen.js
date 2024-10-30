import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>

      <View style={styles.photoContainer}>
        <Icon
          name="account-circle"
          type="material-community"
          size={80}
          color="#d3d3d3"
        />
        <Text style={styles.photoText}>Hello, Terrence</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="account" type="material-community" size={24} />
          <Text style={styles.infoText}>Terrence Ramoetlo</Text>
        </View>

        <View style={styles.infoItem}>
          <Icon name="email" type="material-community" size={24} />
          <Text style={styles.infoText}>trencerams@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.signOutButton}>
          <Icon name="logout" type="material-community" size={24} />
          <Text style={styles.infoText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  addPhotoButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  photoText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  photoHint: {
    color: "#4CAF50",
    textAlign: "center",
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
  editText: {
    color: "#4CAF50",
    fontSize: 16,
  },
});

export default UserProfileScreen;
