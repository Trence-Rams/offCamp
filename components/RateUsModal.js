import React, { useState } from "react";
import { Rating } from "react-native-elements";
import RateUsModalStyles from "../styles/RateUsModalStyles";
import { BottomSheet, Button } from "react-native-elements";
import { View, Text } from "react-native";

const RateUsModal = ({ showRateUsModal, setShowRateUsModal }) => {
  const [rating, setRating] = useState(0);

  return (
    <BottomSheet
      isVisible={showRateUsModal}
      containerStyle={RateUsModalStyles.bottomSheetContainer}
      onBackdropPress={() => setShowRateUsModal(false)}
      backdropStyle={RateUsModalStyles.backdrop}
    >
      <View style={RateUsModalStyles.content}>
        <View style={RateUsModalStyles.modalHeader}>
          <Text style={RateUsModalStyles.modalTitle}>Rate Us</Text>
        </View>
        <View style={RateUsModalStyles.ratingContainer}>
          <Text>{rating.toFixed(1)}</Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            startingValue={rating}
            onFinishRating={(value) => setRating(value)}
            fractions
          />
        </View>
        <View style={RateUsModalStyles.buttonContainer}>
          <Button title="Confirm" buttonStyle={RateUsModalStyles.button} />
          <Button
            onPress={() => setShowRateUsModal(false)}
            title="Cancel"
            buttonStyle={RateUsModalStyles.cancelButton}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default RateUsModal;
