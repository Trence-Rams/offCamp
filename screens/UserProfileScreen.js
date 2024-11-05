import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import SettingsComponent from "../components/SettingsComponent";
const PersonalInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>profile</Text>
      <View style={styles.photoContainer}>
        <Icon
          name="account-circle"
          type="material-community"
          size={80}
          color="#d3d3d3"
        />
        <TouchableOpacity style={styles.addPhotoButton}>
          <Icon
            name="plus-circle"
            type="material-community"
            size={24}
            color="#252525"
          />
        </TouchableOpacity>
        <Text style={styles.photoText}>Hello, Terrence</Text>
        <Text style={styles.photoHint}>
          Add or change a profile photo by pressing the plus button above.
        </Text>
      </View>
      <SettingsComponent />
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

export default PersonalInfoScreen;
