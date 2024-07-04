import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-paper";
import { BottomSheet } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const SettingsComponent = () => {
  const [showEmailEditModal, setShowEmailEditModal] = useState(false);
  const [showPasswordEditModal, setShowPasswordEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUserNameEditModal, setShowUserNameEditModal] = useState(false);
  const [showContactEditModal, setShowContactEditModal] = useState(false);

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
    <View style={{ gap: 5, marginHorizontal: 20 }}>
      <Text style={{ padding: 15, fontWeight: "bold", fontSize: 15 }}>
        Settings
      </Text>

      <TouchableOpacity
        onPress={showAlert}
        style={{ backgroundColor: "#fff", padding: 5, borderRadius: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: "50%",
            paddingVertical: 10,
          }}
        >
          <Icon color="#4d5963" source="trash-can-outline" size={20} />
          <Text>Delete your account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowEmailEditModal(true)}
        style={{ backgroundColor: "#fff", padding: 5, borderRadius: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: "50%",
            paddingVertical: 10,
          }}
        >
          <Icon color="#4d5963" source="email-edit-outline" size={20} />
          <Text>Edit your email</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowPasswordEditModal(true)}
        style={{ backgroundColor: "#fff", padding: 5, borderRadius: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: "50%",
            paddingVertical: 10,
          }}
        >
          <Icon color="#4d5963" source="account-key-outline" size={20} />
          <Text>Change your password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowUserNameEditModal(true)}
        style={{ backgroundColor: "#fff", padding: 5, borderRadius: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: "50%",
            paddingVertical: 10,
          }}
        >
          <Icon color="#4d5963" source="pencil" size={20} />
          <Text>Edit your username</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowContactEditModal(true)}
        style={{ backgroundColor: "#fff", padding: 5, borderRadius: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: "50%",
            paddingVertical: 10,
          }}
        >
          <Icon color="#4d5963" source="phone" size={20} />
          <Text>Change your contact</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.container}>
        <BottomSheet
          isVisible={showDeleteModal}
          containerStyle={styles.bottomSheetContainer}
          onBackdropPress={() => setShowDeleteModal(false)}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 50 }}>
              <Text style={{ fontSize: 28 }}>Delete Account</Text>
              <Text>Enter your password to continue.</Text>
            </View>
            <Input secureTextEntry placeholder="Password" />
            <View style={{ alignItems: "center", width: "100%" }}>
              <Button
                title="Continue"
                buttonStyle={{
                  backgroundColor: "#fc8e53",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Button
                onPress={() => setShowDeleteModal(false)}
                title="cancel"
                buttonStyle={{
                  backgroundColor: "#adadad",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </View>

      <View style={styles.container}>
        <BottomSheet
          isVisible={showEmailEditModal}
          containerStyle={styles.bottomSheetContainer}
          onBackdropPress={() => setShowEmailEditModal(false)}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 50 }}>
              <Text style={{ fontSize: 28 }}>Edit Email</Text>
              <Text>Make changes to your email here.</Text>
            </View>
            <Input placeholder="Email" />
            <View style={{ alignItems: "center", width: "100%" }}>
              <Button
                title="Save changes"
                buttonStyle={{
                  backgroundColor: "#fc8e53",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Button
                onPress={() => setShowEmailEditModal(false)}
                title="cancel"
                buttonStyle={{
                  backgroundColor: "#adadad",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </View>

      <View style={styles.container}>
        <BottomSheet
          isVisible={showPasswordEditModal}
          containerStyle={styles.bottomSheetContainer}
          onBackdropPress={() => setShowPasswordEditModal(false)}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 50 }}>
              <Text style={{ fontSize: 28 }}>Change Password</Text>
              <Text>Make changes to your password here.</Text>
            </View>
            <Input secureTextEntry placeholder="Current Password" />
            <Input secureTextEntry placeholder="New Password" />
            <View style={{ alignItems: "center", width: "100%" }}>
              <Button
                title="Save changes"
                buttonStyle={{
                  backgroundColor: "#fc8e53",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Button
                onPress={() => setShowPasswordEditModal(false)}
                title="cancel"
                buttonStyle={{
                  backgroundColor: "#adadad",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </View>

      <View style={styles.container}>
        <BottomSheet
          isVisible={showUserNameEditModal}
          containerStyle={styles.bottomSheetContainer}
          onBackdropPress={() => setShowUserNameEditModal(false)}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 50 }}>
              <Text style={{ fontSize: 28 }}>Edit Username</Text>
              <Text>Edit your username here.</Text>
            </View>
            <Input placeholder="New Username" />
            <View style={{ alignItems: "center", width: "100%" }}>
              <Button
                title="Save Changes"
                buttonStyle={{
                  backgroundColor: "#fc8e53",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Button
                onPress={() => setShowUserNameEditModal(false)}
                title="cancel"
                buttonStyle={{
                  backgroundColor: "#adadad",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </View>

      <View style={styles.container}>
        <BottomSheet
          isVisible={showContactEditModal}
          containerStyle={styles.bottomSheetContainer}
          onBackdropPress={() => setShowContactEditModal(false)}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.content}>
            <View style={{ marginBottom: 50 }}>
              <Text style={{ fontSize: 28 }}>Change Contact</Text>
              <Text>Change your contact here.</Text>
            </View>
            <Input placeholder="Contact" />
            <View style={{ alignItems: "center", width: "100%" }}>
              <Button
                title="Save Changes"
                buttonStyle={{
                  backgroundColor: "#fc8e53",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
              <Button
                onPress={() => setShowContactEditModal(false)}
                title="cancel"
                buttonStyle={{
                  backgroundColor: "#adadad",
                  width: 200,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    height: 400,
    alignItems: "flex-start",
  },

  text: {
    marginBottom: 10,
  },
});

export default SettingsComponent;
