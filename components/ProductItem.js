import React, { useMemo } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { UserRating } from "../components/UserRating";

const ProductItem = React.memo(({ item, onPress, rating }) => {
  const streetViewUrl = useMemo(
    () =>
      `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${item.Street_Address}&key=${process.env.EXPO_PUBLIC_API_KEY}`,
    [item.Street_Address]
  );

  return (
    <TouchableOpacity
      style={HomeScreen_styles.item}
      onPress={() => onPress(item)}
    >
      <Image source={{ uri: streetViewUrl }} style={HomeScreen_styles.image} />
      <Text style={HomeScreen_styles.name}>{item.Residence_Name}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "#888" }}>
          {item.Accreditation_Number}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Text style={{ fontSize: 12, color: "#888" }}>
            {rating.toFixed(1)}
          </Text>
          <UserRating rating={rating} setRating={() => {}} ratingCount={1} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ProductItem;
