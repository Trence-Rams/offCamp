import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import SettingsComponent from "../components/SettingsComponent";
import UserProfileScreenStyles from "../styles/UserProfileScreenStyles";
import SpeedDialComponent from "../components/SpeedDialComponent";
import { selectImage } from "../utils/selectImage";
import { openCamera } from "../utils/openCamera";
import FullImageViewer from "../components/FullImageViewer";
import { deleteImage } from "../utils/deleteImage";

const UserProfileScreen = () => {
  const [isFabVisible, setIsFabVisible] = useState(false);
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={UserProfileScreenStyles.container}>
      <Text style={UserProfileScreenStyles.header}>Profile</Text>
      <View style={UserProfileScreenStyles.photoContainer}>
        {image ? (
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Image
              source={{ uri: image }}
              style={{
                width: 80,
                height: 80,
                marginBottom: 20,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        ) : (
          <Icon
            name="account-circle"
            type="material-community"
            size={80}
            color="#d3d3d3"
          />
        )}

        <TouchableOpacity
          onPress={() => {
            setIsFabVisible(true);
            setIsOpen(true);
          }}
          style={UserProfileScreenStyles.addPhotoButton}
        >
          <Icon
            name="plus-circle"
            type="material-community"
            size={24}
            color="#4d5963"
          />
        </TouchableOpacity>

        <Text style={UserProfileScreenStyles.photoText}>Hello, Terrence</Text>
        <Text style={UserProfileScreenStyles.photoHint}>
          Add or change a profile photo by pressing the plus button above.
        </Text>
      </View>

      <SettingsComponent />

      {isFabVisible && (
        <SpeedDialComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsFabVisible={setIsFabVisible}
          selectImage={() => selectImage(setImage)}
          openCamera={() => openCamera(setImage)}
          deleteImage={() => deleteImage(setImage)}
        />
      )}
      <FullImageViewer
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        image={image}
      />
    </View>
  );
};

export default UserProfileScreen;
