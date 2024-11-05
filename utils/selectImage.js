import * as ImagePicker from "expo-image-picker";

export const selectImage = async (setImage) => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!pickerResult.canceled) {
    setImage(pickerResult.assets[0].uri);
  }
};
