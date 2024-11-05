import * as ImagePicker from "expo-image-picker";

export const openCamera = async (setImage) => {
  // Request camera permissions
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    return;
  }

  // Launch the camera
  let cameraResult = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!cameraResult.canceled) {
    setImage(cameraResult.assets[0].uri);
  }
};
