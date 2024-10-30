import * as Linking from "expo-linking";
import { Alert } from "react-native";

export const openWhatsApp = async (selectedResidence) => {
  const message = `Hi,

I hope you're doing well. I'm interested in your student accommodation at ${selectedResidence?.Street_Address}, ${selectedResidence?.Residence_Name}. Could you please let me know if it's available for rent and provide any relevant details such as the price and terms?

Thank you, and I look forward to hearing from you.`;

  if (!selectedResidence?.CellNumber)
    throw new Error("Phone number is required");

  const formattedPhoneNumber = `+27${selectedResidence?.CellNumber.slice(1)}`;
  const url = `whatsapp://send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("WhatsApp is not installed on your device");
    }
  } catch (error) {
    Alert.alert("Failed to send WhatsApp message", error.message);
  }
};
