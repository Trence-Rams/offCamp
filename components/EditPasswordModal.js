import React from "react";
import { View, Text } from "react-native";
import { BottomSheet, Input, Button } from "react-native-elements";
import SettingsComponentStyles from "../styles/SettingsComponentStyles";

const EditPasswordModal = ({
  showPasswordEditModal,
  setShowPasswordEditModal,
}) => {
  return (
    <BottomSheet
      isVisible={showPasswordEditModal}
      containerStyle={SettingsComponentStyles.bottomSheetContainer}
      onBackdropPress={() => setShowPasswordEditModal(false)}
      backdropStyle={SettingsComponentStyles.backdrop}
    >
      <View style={SettingsComponentStyles.content}>
        <View style={SettingsComponentStyles.modalHeader}>
          <Text style={SettingsComponentStyles.modalTitle}>
            Change Password
          </Text>
          <Text>Make changes to your password here.</Text>
        </View>
        <Input secureTextEntry placeholder="Current Password" />
        <Input secureTextEntry placeholder="New Password" />
        <View style={SettingsComponentStyles.buttonContainer}>
          <Button
            title="Save changes"
            buttonStyle={SettingsComponentStyles.button}
          />
          <Button
            onPress={() => setShowPasswordEditModal(false)}
            title="Cancel"
            buttonStyle={SettingsComponentStyles.cancelButton}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default EditPasswordModal;
