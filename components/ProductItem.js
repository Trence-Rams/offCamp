import React, { useMemo } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { UserRating } from "../components/UserRating";
import ProductItemStyles from "../styles/ProductItemStyles";

const ProductItem = React.memo(({ item, onPress, rating }) => {
  const streetViewUrl = useMemo(
    () =>
      `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${item.Street_Address}&key=${process.env.EXPO_PUBLIC_API_KEY}`,
    [item.Street_Address]
  );

  return (
    <TouchableOpacity
      style={ProductItemStyles.item}
      onPress={() => onPress(item)}
    >
      <Image source={{ uri: streetViewUrl }} style={ProductItemStyles.image} />
      <Text style={ProductItemStyles.residenceName}>{item.Residence_Name}</Text>
      <View style={ProductItemStyles.infoContainer}>
        <Text style={ProductItemStyles.accreditationText}>
          {item.Accreditation_Number}
        </Text>
        <View style={ProductItemStyles.ratingContainer}>
          <Text style={ProductItemStyles.ratingText}>{rating.toFixed(1)}</Text>
          <UserRating rating={rating} setRating={() => {}} ratingCount={1} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ProductItem;
