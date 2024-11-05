import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-paper";
import { BottomSheet, Icon as Icon2 } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import UserProfileScreenStyles from "../styles/UserProfileScreenStyles";

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
    <View style={styles.settingsContainer}>
      <Text style={styles.headerText}>Settings</Text>
      <TouchableOpacity
        onPress={() => setShowUserNameEditModal(true)}
        style={styles.touchable}
      >
        <View style={styles.row}>
          <Icon color="#4d5963" source="pencil" size={20} />
          <Text>Edit your username</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowEmailEditModal(true)}
        style={styles.touchable}
      >
        <View style={styles.row}>
          <Icon color="#4d5963" source="email-edit-outline" size={20} />
          <Text>Edit your email</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowPasswordEditModal(true)}
        style={styles.touchable}
      >
        <View style={styles.row}>
          <Icon color="#4d5963" source="account-key-outline" size={20} />
          <Text>Change your password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={showAlert} style={styles.touchable}>
        <View style={styles.row}>
          <Icon color="#4d5963" source="trash-can-outline" size={20} />
          <Text>Delete your account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={UserProfileScreenStyles.signOutButton}>
        <Icon2 name="logout" type="material-community" size={20} />
        <Text style={UserProfileScreenStyles.infoText}>Sign out</Text>
      </TouchableOpacity>

      {/* Delete Account Modal */}
      <BottomSheet
        isVisible={showDeleteModal}
        containerStyle={styles.bottomSheetContainer}
        onBackdropPress={() => setShowDeleteModal(false)}
        backdropStyle={styles.backdrop}
      >
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Delete Account</Text>
            <Text>Enter your password to continue.</Text>
          </View>
          <Input secureTextEntry placeholder="Password" />
          <View style={styles.buttonContainer}>
            <Button title="Continue" buttonStyle={styles.button} />
            <Button
              onPress={() => setShowDeleteModal(false)}
              title="Cancel"
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </BottomSheet>

      {/* Email Edit Modal */}
      <BottomSheet
        isVisible={showEmailEditModal}
        containerStyle={styles.bottomSheetContainer}
        onBackdropPress={() => setShowEmailEditModal(false)}
        backdropStyle={styles.backdrop}
      >
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Edit Email</Text>
            <Text>Make changes to your email here.</Text>
          </View>
          <Input placeholder="Email" />
          <View style={styles.buttonContainer}>
            <Button title="Save changes" buttonStyle={styles.button} />
            <Button
              onPress={() => setShowEmailEditModal(false)}
              title="Cancel"
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </BottomSheet>

      {/* Password Edit Modal */}
      <BottomSheet
        isVisible={showPasswordEditModal}
        containerStyle={styles.bottomSheetContainer}
        onBackdropPress={() => setShowPasswordEditModal(false)}
        backdropStyle={styles.backdrop}
      >
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Change Password</Text>
            <Text>Make changes to your password here.</Text>
          </View>
          <Input secureTextEntry placeholder="Current Password" />
          <Input secureTextEntry placeholder="New Password" />
          <View style={styles.buttonContainer}>
            <Button title="Save changes" buttonStyle={styles.button} />
            <Button
              onPress={() => setShowPasswordEditModal(false)}
              title="Cancel"
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </BottomSheet>

      {/* Username Edit Modal */}
      <BottomSheet
        isVisible={showUserNameEditModal}
        containerStyle={styles.bottomSheetContainer}
        onBackdropPress={() => setShowUserNameEditModal(false)}
        backdropStyle={styles.backdrop}
      >
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Edit Username</Text>
            <Text>Edit your username here.</Text>
          </View>
          <Input placeholder="New Username" />
          <View style={styles.buttonContainer}>
            <Button title="Save Changes" buttonStyle={styles.button} />
            <Button
              onPress={() => setShowUserNameEditModal(false)}
              title="Cancel"
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {},
  headerText: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
  touchable: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginRight: "50%",
    paddingVertical: 10,
  },
  bottomSheetContainer: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "flex-start",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    height: 400,
  },
  modalHeader: {
    marginBottom: 50,
  },
  modalTitle: {
    fontSize: 28,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#fc8e53",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: "#adadad",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default SettingsComponent;
