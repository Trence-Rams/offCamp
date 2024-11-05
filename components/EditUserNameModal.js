import React from "react";
import { View, Text } from "react-native";
import { BottomSheet, Input, Button } from "react-native-elements";
import SettingsComponentStyles from "../styles/SettingsComponentStyles";

const EditUserNameModal = ({
  showUserNameEditModal,
  setShowUserNameEditModal,
}) => {
  return (
    <BottomSheet
      isVisible={showUserNameEditModal}
      containerStyle={SettingsComponentStyles.bottomSheetContainer}
      onBackdropPress={() => setShowUserNameEditModal(false)}
      backdropStyle={SettingsComponentStyles.backdrop}
    >
      <View style={SettingsComponentStyles.content}>
        <View style={SettingsComponentStyles.modalHeader}>
          <Text style={SettingsComponentStyles.modalTitle}>Edit Username</Text>
          <Text>Edit your username here.</Text>
        </View>
        <Input placeholder="New Username" />
        <View style={SettingsComponentStyles.buttonContainer}>
          <Button
            title="Save Changes"
            buttonStyle={SettingsComponentStyles.button}
          />
          <Button
            onPress={() => setShowUserNameEditModal(false)}
            title="Cancel"
            buttonStyle={SettingsComponentStyles.cancelButton}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default EditUserNameModal;
