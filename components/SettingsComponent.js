import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-paper";
import { Icon as Icon2 } from "react-native-elements";
import UserProfileScreenStyles from "../styles/UserProfileScreenStyles";
import SettingsComponentStyles from "../styles/SettingsComponentStyles";
import DeleteAccountModal from "./DeleteAccountModal";
import EditEmailModal from "./EditEmailModal";
import EditPasswordModal from "./EditPasswordModal";
import EditUserNameModal from "./EditUserNameModal";

const SettingsComponent = () => {
  const [showEmailEditModal, setShowEmailEditModal] = useState(false);
  const [showPasswordEditModal, setShowPasswordEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUserNameEditModal, setShowUserNameEditModal] = useState(false);

  const showAlert = () => {
    Alert.alert(
      "Delete Account",
      "Your account will be permanently deleted.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setShowDeleteModal(true) },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={SettingsComponentStyles.settingsContainer}>
      <Text style={SettingsComponentStyles.headerText}>Settings</Text>
      <TouchableOpacity
        onPress={() => setShowUserNameEditModal(true)}
        style={SettingsComponentStyles.touchable}
      >
        <View style={SettingsComponentStyles.row}>
          <Icon color="#4d5963" source="pencil" size={20} />
          <Text>Edit your username</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowEmailEditModal(true)}
        style={SettingsComponentStyles.touchable}
      >
        <View style={SettingsComponentStyles.row}>
          <Icon color="#4d5963" source="email-edit-outline" size={20} />
          <Text>Edit your email</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowPasswordEditModal(true)}
        style={SettingsComponentStyles.touchable}
      >
        <View style={SettingsComponentStyles.row}>
          <Icon color="#4d5963" source="account-key-outline" size={20} />
          <Text>Change your password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={showAlert}
        style={SettingsComponentStyles.touchable}
      >
        <View style={SettingsComponentStyles.row}>
          <Icon color="#4d5963" source="trash-can-outline" size={20} />
          <Text>Delete your account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={UserProfileScreenStyles.signOutButton}>
        <Icon2 name="logout" type="material-community" size={20} />
        <Text style={UserProfileScreenStyles.infoText}>Sign out</Text>
      </TouchableOpacity>
      <DeleteAccountModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <EditEmailModal
        showEmailEditModal={showEmailEditModal}
        setShowEmailEditModal={setShowEmailEditModal}
      />
      <EditPasswordModal
        showPasswordEditModal={showPasswordEditModal}
        setShowPasswordEditModal={setShowPasswordEditModal}
      />
      <EditUserNameModal
        showUserNameEditModal={showUserNameEditModal}
        setShowUserNameEditModal={setShowUserNameEditModal}
      />
    </View>
  );
};

export default SettingsComponent;
