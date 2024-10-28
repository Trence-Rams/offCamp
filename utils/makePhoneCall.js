import * as Linking from "expo-linking";

export const makePhoneCall = (phoneNumber) => {
  if (!phoneNumber) throw new Error("Phone number is required");

  Linking.openURL(`tel:${phoneNumber}`).catch((err) => {
    console.error("Failed to open phone dialer:", err);
  });
};
