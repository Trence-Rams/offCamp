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
      icon={{ name: "edit", color: "#fff" }}
      openIcon={{ name: "close", color: "#fff" }}
      onClose={() => {
        setIsOpen(false);
        setIsFabVisible(false);
      }}
    >
      <SpeedDial.Action
        icon={{ name: "delete", color: "#fff" }}
        title="Delete"
        onPress={() => {
          setIsOpen(false);
          setIsFabVisible(false);
          deleteImage();
        }}
      />
      <SpeedDial.Action
        icon={{ name: "image", color: "#fff" }}
        title="Gallery"
        onPress={() => {
          setIsOpen(false);
          setIsFabVisible(false);
          selectImage();
        }}
      />
      <SpeedDial.Action
        icon={{ name: "photo-camera", color: "#fff" }}
        title="Camera"
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
