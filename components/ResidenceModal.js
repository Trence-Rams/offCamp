import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { UserRating as UserRatingModal } from "./UserRating";
import { makePhoneCall } from "../utils/makePhoneCall";
import { openWhatsApp } from "../utils/openWhatsApp";
import Modal from "react-native-modal";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import StreetViewButton from "./StreetViewButton";
import DistanceInfo from "./DistanceInfo";
import DirectionsButton from "./DirectionsButton";
import ResidenceModalStyles from "../styles/ResidenceModalStyles";
import FullImageViewer from "./FullImageViewer";

const ResidenceModal = ({
  isVisible,
  selectedResidence,
  rating,
  setRating,
  distance,
  closeModal,
  navigation,
  API_KEY,
}) => {
  const image = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${selectedResidence?.Street_Address}&key=${API_KEY}`;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
      onBackdropPress={closeModal}
    >
      <View style={ResidenceModalStyles.modalContainer}>
        <TouchableOpacity
          onPress={closeModal}
          style={ResidenceModalStyles.closeButton}
        >
          <MaterialCommunityIcons name="close" color="grey" size={25} />
        </TouchableOpacity>
        <ScrollView style={ResidenceModalStyles.scrollContainer}>
          <View style={ResidenceModalStyles.centeredContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Image
                source={{
                  uri: image,
                }}
                style={ResidenceModalStyles.image}
              />
            </TouchableOpacity>
            <View style={ResidenceModalStyles.headerContainer}>
              <View>
                <Text style={ResidenceModalStyles.ModalResidenceName}>
                  {selectedResidence?.Residence_Name}
                </Text>
                <Text style={ResidenceModalStyles.ModalResidencePrice}>
                  {selectedResidence?.Accreditation_Number}
                </Text>
              </View>
              <DirectionsButton address={selectedResidence?.Street_Address} />
            </View>
            <View style={ResidenceModalStyles.ratingContainer}>
              <Text>{rating.toFixed(1)}</Text>
              <UserRatingModal
                rating={rating}
                setRating={setRating}
                ratingCount={5}
              />
            </View>
            <DistanceInfo distance={distance} />
            <View style={ResidenceModalStyles.addressContainer}>
              <View>
                <Text style={ResidenceModalStyles.sectionTitle}>
                  Street address:
                </Text>
                <Text style={ResidenceModalStyles.streetAddress}>
                  {selectedResidence?.Street_Address}
                </Text>
              </View>
              <StreetViewButton
                onPress={() => {
                  closeModal();
                  navigation.navigate("StreetView", {
                    address: selectedResidence?.Street_Address,
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={ResidenceModalStyles.actionButtonsContainer}>
          <CallButton
            onPress={makePhoneCall}
            cellNumber={selectedResidence?.CellNumber}
          />
          <WhatsAppButton
            onPress={openWhatsApp}
            SelectedResidence={selectedResidence}
          />
        </View>
      </View>
      <FullImageViewer
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        image={image}
      />
    </Modal>
  );
};

export default ResidenceModal;
