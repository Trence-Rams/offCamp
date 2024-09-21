import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

// Store the API key securely (consider using environment variables in production)
const API_KEY = "AIzaSyCrSHEDzwvDXd3PN2zM7MnRGSweBw1uZQY"; // Replace with your actual API key

// Function to get the coordinates (latitude, longitude) from an address
async function getCoordinates(address) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = await response.json();
  if (data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  }
  return null;
}

const StreetView = ({ address = "1 molen street potchefstroom" }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoordinates() {
      const coords = await getCoordinates(address);
      if (coords) {
        setCoordinates(coords);
      }
      setLoading(false);
    }
    fetchCoordinates();
  }, [address]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!coordinates) {
    return (
      <View>
        <Text>Could not load map</Text>
      </View>
    );
  }

  const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=${API_KEY}&location=${coordinates.lat},${coordinates.lng}&heading=210&pitch=10&fov=35`;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `<html>
          <body>
            <iframe  width="100%" height="100%" frameborder="0" style="border:0"
              src="${streetViewUrl}" allowfullscreen></iframe>
          </body>
        </html>`,
        }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default StreetView;
