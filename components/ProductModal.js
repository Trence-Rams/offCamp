import React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { UserRating as UserRatingModal } from "../components/UserRating";
import { makePhoneCall } from "../utils/makePhoneCall";
import { openWhatsApp } from "../utils/openWhatsApp";
import Modal from "react-native-modal";
import CallButton from "../components/CallButton";
import WhatsAppButton from "../components/WhatsAppButton";
import StreetViewButton from "../components/StreetViewButton";
import DistanceInfo from "../components/DistanceInfo";
import DirectionsButton from "../components/DirectionsButton";
import ProductModalStyles from "../styles/ProductModalStyles";

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
      <View style={ProductModalStyles.modalContainer}>
        <TouchableOpacity
          onPress={closeModal}
          style={ProductModalStyles.closeButton}
        >
          <MaterialCommunityIcons name="close" color="grey" size={25} />
        </TouchableOpacity>
        <ScrollView style={ProductModalStyles.scrollContainer}>
          <View style={ProductModalStyles.centeredContainer}>
            <Image
              source={{
                uri: `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${selectedProduct?.Street_Address}&key=${API_KEY}`,
              }}
              style={ProductModalStyles.image}
            />
            <View style={ProductModalStyles.headerContainer}>
              <View>
                <Text style={ProductModalStyles.ModalProductName}>
                  {selectedProduct?.Residence_Name}
                </Text>
                <Text style={ProductModalStyles.ModalProductPrice}>
                  {selectedProduct?.Accreditation_Number}
                </Text>
              </View>
              <DirectionsButton address={selectedProduct?.Street_Address} />
            </View>
            <View style={ProductModalStyles.ratingContainer}>
              <Text>{rating.toFixed(1)}</Text>
              <UserRatingModal
                rating={rating}
                setRating={setRating}
                ratingCount={5}
              />
            </View>
            <DistanceInfo distance={distance} />
            <View style={ProductModalStyles.addressContainer}>
              <View>
                <Text style={ProductModalStyles.sectionTitle}>
                  Street address:
                </Text>
                <Text style={ProductModalStyles.streetAddress}>
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
        <View style={ProductModalStyles.actionButtonsContainer}>
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
