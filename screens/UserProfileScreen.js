import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import UserProfileScreenStyles from "../styles/UserProfileScreenStyles";

const UserProfileScreen = () => {
  return (
    <View style={UserProfileScreenStyles.container}>
      <Text style={UserProfileScreenStyles.header}>Account</Text>

      <View style={UserProfileScreenStyles.photoContainer}>
        <Icon
          name="account-circle"
          type="material-community"
          size={80}
          color="#d3d3d3"
        />
        <Text style={UserProfileScreenStyles.photoText}>Hello, Terrence</Text>
      </View>

      <View style={UserProfileScreenStyles.infoContainer}>
        <View style={UserProfileScreenStyles.infoItem}>
          <Icon name="account" type="material-community" size={24} />
          <Text style={UserProfileScreenStyles.infoText}>
            Terrence Ramoetlo
          </Text>
        </View>

        <View style={UserProfileScreenStyles.infoItem}>
          <Icon name="email" type="material-community" size={24} />
          <Text style={UserProfileScreenStyles.infoText}>
            trencerams@gmail.com
          </Text>
        </View>
        <TouchableOpacity style={UserProfileScreenStyles.signOutButton}>
          <Icon name="logout" type="material-community" size={24} />
          <Text style={UserProfileScreenStyles.infoText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileScreen;
