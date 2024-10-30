const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export const getCoordinates = async (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error("Unable to get coordinates");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};
