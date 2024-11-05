import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import { Alert } from "react-native";

export const selectImage = async (setImage) => {
  // Request media library permissions
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Media Library Permission Required",
      "This app needs access to your media library to select photos. Please enable access in settings.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() },
      ]
    );
    return;
  }

  // Launch image library picker
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  // Check if the user selected an image
  if (pickerResult && !pickerResult.canceled && pickerResult.assets) {
    setImage(pickerResult.assets[0].uri);
  }
};
