import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import { Alert } from "react-native";

export const openCamera = async (setImage) => {
  // Request camera permissions
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  if (status !== "granted") {
    // Show an alert to guide users to settings
    Alert.alert(
      "Camera Permission Required",
      "This app needs access to your camera to take photos. Please enable camera access in settings.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() },
      ]
    );
    return;
  }

  // Launch the camera
  let cameraResult = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  // Check if user took a photo
  if (cameraResult && !cameraResult.canceled && cameraResult.assets) {
    setImage(cameraResult.assets[0].uri);
  }
};
