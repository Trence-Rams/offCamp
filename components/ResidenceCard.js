import React, { useMemo } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { UserRating } from "./UserRating";
import ResidenceCardStyles from "../styles/ResidenceCardStyles";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const ResidenceCard = React.memo(({ item, onPress, rating }) => {
  const streetViewUrl = useMemo(
    () =>
      `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${item.Street_Address}&key=${API_KEY}`,
    [item.Street_Address]
  );

  return (
    <TouchableOpacity
      style={ResidenceCardStyles.card}
      onPress={() => onPress(item)}
    >
      <Image
        source={{ uri: streetViewUrl }}
        style={ResidenceCardStyles.image}
      />
      <Text style={ResidenceCardStyles.residenceName}>
        {item.Residence_Name}
      </Text>
      <View style={ResidenceCardStyles.infoContainer}>
        <Text style={ResidenceCardStyles.accreditationText}>
          {item.Accreditation_Number}
        </Text>
        <View style={ResidenceCardStyles.ratingContainer}>
          <Text style={ResidenceCardStyles.ratingText}>
            {rating.toFixed(1)}
          </Text>
          <UserRating rating={rating} setRating={() => {}} ratingCount={1} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ResidenceCard;
