import React from "react";
import { View, Text } from "react-native";
import { BottomSheet, Input, Button } from "react-native-elements";
import SettingsComponentStyles from "../styles/SettingsComponentStyles";

const DeleteAccountModal = ({ showDeleteModal, setShowDeleteModal }) => {
  return (
    <BottomSheet
      isVisible={showDeleteModal}
      containerStyle={SettingsComponentStyles.bottomSheetContainer}
      onBackdropPress={() => setShowDeleteModal(false)}
      backdropStyle={SettingsComponentStyles.backdrop}
    >
      <View style={SettingsComponentStyles.content}>
        <View style={SettingsComponentStyles.modalHeader}>
          <Text style={SettingsComponentStyles.modalTitle}>Delete Account</Text>
          <Text>Enter your password to continue.</Text>
        </View>
        <Input secureTextEntry placeholder="Password" />
        <View style={SettingsComponentStyles.buttonContainer}>
          <Button
            title="Continue"
            buttonStyle={SettingsComponentStyles.button}
          />
          <Button
            onPress={() => setShowDeleteModal(false)}
            title="Cancel"
            buttonStyle={SettingsComponentStyles.cancelButton}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default DeleteAccountModal;
