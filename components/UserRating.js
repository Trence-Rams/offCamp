import React from "react";
import { Rating } from "react-native-elements";

export const UserRating = ({ ratingCount, rating }) => {
  return (
    <Rating
      type="star"
      ratingCount={ratingCount}
      imageSize={15}
      startingValue={rating}
      readonly
      fractions
    />
  );
};
