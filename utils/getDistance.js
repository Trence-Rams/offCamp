const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const universityLocation =
  "North-West University, Building F1, 11 Hoffman St, Potchefstroom, 2531";

export const getDistance = async (origin, destination = universityLocation) => {
  const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";
  const url = `${baseUrl}?origins=${origin}&destinations=${destination}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const element = data.rows[0].elements[0];
      const distance = element.distance.text;
      return distance;
    } else {
      console.error("Error fetching distance data:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Request failed", error);
    return null;
  }
};
