import React from "react";
import { Modal, View, Image } from "react-native";

const FullImageViewer = ({ isModalVisible, setIsModalVisible, image }) => {
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="contain"
          />
        )}
      </View>
    </Modal>
  );
};

export default FullImageViewer;
