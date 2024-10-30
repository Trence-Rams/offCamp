import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import StreetViewScreenStyles from "../styles/StreetViewScreenStyles";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

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
const StreetViewScreen = () => {
  const route = useRoute();
  const { address } = route.params;
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
    <View style={StreetViewScreenStyles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `<html>
          <body style="margin: 0; padding: 0;">
            <iframe width="100%" height="60%" frameborder="0" style="border:0"
              src="${streetViewUrl}" allowfullscreen></iframe>
          </body>
        </html>`,
        }}
        style={StreetViewScreenStyles.map}
      />
    </View>
  );
};

export default StreetViewScreen;
