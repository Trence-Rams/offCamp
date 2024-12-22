import React from "react";
import { SpeedDial } from "react-native-elements";

const SpeedDialComponent = ({
  isOpen,
  setIsOpen,
  setIsFabVisible,
  openCamera,
  selectImage,
  deleteImage,
}) => {
  return (
    <SpeedDial
      isOpen={isOpen}
      icon={{ name: "edit", color: "#4d5963" }}
      buttonStyle={{ backgroundColor: "#fff" }}
      openIcon={{ name: "close", color: "#4d5963" }}
      onClose={() => {
        setIsOpen(false);
        setIsFabVisible(false);
      }}
    >
      <SpeedDial.Action
        icon={{ name: "delete", color: "#4d5963" }}
        title="Delete"
        buttonStyle={{ backgroundColor: "#fff" }}
        onPress={() => {
          setIsOpen(false);
          setIsFabVisible(false);
          deleteImage();
        }}
      />
      <SpeedDial.Action
        icon={{ name: "image", color: "#4d5963" }}
        title="Gallery"
        buttonStyle={{ backgroundColor: "#fff" }}
        onPress={() => {
          setIsOpen(false);
          setIsFabVisible(false);
          selectImage();
        }}
      />
      <SpeedDial.Action
        icon={{ name: "photo-camera", color: "#4d5963" }}
        title="Camera"
        buttonStyle={{ backgroundColor: "#fff" }}
        onPress={() => {
          setIsOpen(false);
          setIsFabVisible(false);
          openCamera();
        }}
      />
    </SpeedDial>
  );
};

export default SpeedDialComponent;
