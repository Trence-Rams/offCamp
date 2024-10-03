import React, { useState } from "react";
import { Rating } from "react-native-elements";

export const UserRating = ({ ratingCount, rating, setRating }) => {
  return (
    <Rating
      type="star"
      ratingCount={ratingCount}
      imageSize={15}
      startingValue={rating}
      onFinishRating={(value) => setRating(value)}
      fractions
    />
  );
};
