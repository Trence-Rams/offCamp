import React from "react";
import { View, Text } from "react-native";
import { BottomSheet, Input, Button } from "react-native-elements";
import SettingsComponentStyles from "../styles/SettingsComponentStyles";

const EditEmailModal = ({ showEmailEditModal, setShowEmailEditModal }) => {
  return (
    <BottomSheet
      isVisible={showEmailEditModal}
      containerStyle={SettingsComponentStyles.bottomSheetContainer}
      onBackdropPress={() => setShowEmailEditModal(false)}
      backdropStyle={SettingsComponentStyles.backdrop}
    >
      <View style={SettingsComponentStyles.content}>
        <View style={SettingsComponentStyles.modalHeader}>
          <Text style={SettingsComponentStyles.modalTitle}>Edit Email</Text>
          <Text>Make changes to your email here.</Text>
        </View>
        <Input placeholder="Email" />
        <View style={SettingsComponentStyles.buttonContainer}>
          <Button
            title="Save changes"
            buttonStyle={SettingsComponentStyles.button}
          />
          <Button
            onPress={() => setShowEmailEditModal(false)}
            title="Cancel"
            buttonStyle={SettingsComponentStyles.cancelButton}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default EditEmailModal;
