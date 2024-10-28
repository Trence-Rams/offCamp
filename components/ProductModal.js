import React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { UserRating as UserRatingModal } from "../components/UserRating";
import CallButton from "../components/CallButton";
import WhatsAppButton from "../components/WhatsAppButton";
import StreetViewButton from "../components/StreetViewButton";
import DistanceInfo from "../components/DistanceInfo";
import DirectionsButton from "../components/DirectionsButton";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { makePhoneCall } from "../Utils/makePhoneCall";
import { openWhatsApp } from "../Utils/openWhatsApp";

const ProductModal = ({
  isVisible,
  selectedProduct,
  rating,
  setRating,
  distance,
  closeModal,
  navigation,
  API_KEY,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
      onBackdropPress={closeModal}
    >
      <View style={HomeScreen_styles.modalContainer}>
        <TouchableOpacity
          onPress={closeModal}
          style={{ alignSelf: "flex-end", padding: 5 }}
        >
          <MaterialCommunityIcons name="close" color="grey" size={25} />
        </TouchableOpacity>
        <ScrollView style={{ width: "95%", alignSelf: "center" }}>
          <View style={{ alignItems: "center", width: "100%" }}>
            <Image
              source={{
                uri: `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${selectedProduct?.Street_Address}&key=${API_KEY}`,
              }}
              style={{ width: "100%", height: 200 }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={HomeScreen_styles.ModalProductName}>
                  {selectedProduct?.Residence_Name}
                </Text>
                <Text style={HomeScreen_styles.ModalProductPrice}>
                  {selectedProduct?.Accreditation_Number}
                </Text>
              </View>
              <DirectionsButton address={selectedProduct?.Street_Address} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Text>{rating.toFixed(1)}</Text>
              <UserRatingModal
                rating={rating}
                setRating={setRating}
                ratingCount={5}
              />
            </View>
            <DistanceInfo distance={distance} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>
                  Street address:
                </Text>
                <Text style={HomeScreen_styles.ModalProductDescription}>
                  {selectedProduct?.Street_Address}
                </Text>
              </View>
              <StreetViewButton
                onPress={() => {
                  closeModal();
                  navigation.navigate("StreetView", {
                    address: selectedProduct?.Street_Address,
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flex: 1,
            width: "100%",
          }}
        >
          <CallButton
            onPress={makePhoneCall}
            cellNumber={selectedProduct?.CellNumber}
          />
          <WhatsAppButton
            onPress={openWhatsApp}
            cellNumber={selectedProduct?.CellNumber}
            product={selectedProduct}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
