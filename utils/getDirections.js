import * as Linking from "expo-linking";
import { getCoordinates } from "./getCoordinates";

export const getDirections = async (address) => {
  if (!address) {
    throw new Error("Address not available");
  }

  const location = await getCoordinates(address);
  if (!location) throw new Error("Unable to retrieve location data");

  const { latitude, longitude } = location;
  const destination = `${latitude},${longitude}`;
  const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving&dir_action=navigate`;

  await Linking.openURL(url);
};
