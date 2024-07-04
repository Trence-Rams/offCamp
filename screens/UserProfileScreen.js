import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfileScreen_Styles from "../styles/UserProfileScreen_Styles";
import UserImageComponent from "../components/UserProfileScreenComponents/UserImageComponent";
import MessageButtonComponent from "../components/UserProfileScreenComponents/MessageButtonComponent";
import SettingsComponent from "../components/UserProfileScreenComponents/SettingsComponent";

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={UserProfileScreen_Styles.container}>
      <>
        <UserImageComponent />
        <MessageButtonComponent />
        <SettingsComponent />
      </>
    </SafeAreaView>
  );
};
export default UserProfileScreen;
