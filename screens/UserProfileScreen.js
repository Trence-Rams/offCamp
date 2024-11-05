import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import SettingsComponent from "../components/SettingsComponent";
import UserProfileScreenStyles from "../styles/UserProfileScreenStyles";
const UserProfileScreen = () => {
  return (
    <View style={UserProfileScreenStyles.container}>
      <Text style={UserProfileScreenStyles.header}>profile</Text>
      <View style={UserProfileScreenStyles.photoContainer}>
        <Icon
          name="account-circle"
          type="material-community"
          size={80}
          color="#d3d3d3"
        />
        <TouchableOpacity style={UserProfileScreenStyles.addPhotoButton}>
          <Icon
            name="plus-circle"
            type="material-community"
            size={24}
            color="#252525"
          />
        </TouchableOpacity>
        <Text style={UserProfileScreenStyles.photoText}>Hello, Terrence</Text>
        <Text style={UserProfileScreenStyles.photoHint}>
          Add or change a profile photo by pressing the plus button above.
        </Text>
      </View>
      <SettingsComponent />
    </View>
  );
};

export default UserProfileScreen;
