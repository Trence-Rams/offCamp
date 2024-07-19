import React, { useState, useCallback } from "react";
import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { Icon, TextInput, addProduct } from "react-native-paper";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "../products";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { BottomSheet } from "react-native-elements";
import { IconButton } from "react-native-paper";
import {} from "../firebase/CRUDServices/addProduct";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { SpeedDial } from "react-native-elements";

const UserProductScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ShowAddProductModal, setShowAddProductModal] = useState(false);
  const [ShowEditProductModal, setShowEditProductModal] = useState(false);
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");
  const [whatsappNumber, setwhatsappNumber] = useState("");
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFABVisible, setFABIsVisible] = useState(false);

  const handleProductPress = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleLocationRequest = useCallback(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      let locationInfo = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      setLocationName(locationInfo[0].city);
    })();
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const renderItem = useCallback(
    ({ item }) => <ProductItem item={item} onPress={handleProductPress} />,
    [handleProductPress]
  );

  const selectImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

  const openCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    // Launch the camera
    let cameraResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cameraResult.canceled) {
      setImage(cameraResult.assets[0].uri);
    }
  };

  const handleAddProduct = async () => {
    if (image) {
      await addProduct(
        productName,
        price,
        whatsappNumber,
        comments,
        location,
        locationName,
        image
      );
      setShowAddProductModal(false);
      // Clear the state after adding product
      setImage("");
      setProductName("");
      setPrice("");
      setComments("");
      setLocation("");
    } else {
      Alert.alert("Error", "Please select an image.");
    }
  };

  const ProductItem = React.memo(({ item }) => (
    <TouchableOpacity
      style={HomeScreen_styles.item}
      onPress={() => handleProductPress(item)}
    >
      <Image
        source={{
          uri: `https://picsum.photos/300/300?${item.name}`,
        }}
        style={HomeScreen_styles.image}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={HomeScreen_styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            marginVertical: 8,
            marginRight: 10,
            padding: 5,
          }}
        >
          <View>
            <Icon color="#4d5963" source="trash-can-outline" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 14, color: "#888" }}>{item.price}</Text>
        <TouchableOpacity onPress={() => setShowEditProductModal(true)}>
          <View style={{ flexDirection: "row" }}>
            <Icon color="#4d5963" source="pencil" size={20} />
            <Text>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView style={HomeScreen_styles.container}>
      <View style={{ marginVertical: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 15,
            marginHorizontal: 10,
            elevation: 5,
          }}
        >
          <Text style={HomeScreen_styles.sellingText}>Add</Text>
          <Button
            onPress={() => {
              handleLocationRequest();
              setShowAddProductModal(true);
            }}
            title="+"
            titleStyle={{ fontSize: 20 }}
            buttonStyle={{
              height: 50,
              width: 50,
              borderRadius: 50,
              alignSelf: "flex-end",
              marginRight: 20,
              backgroundColor: "#fc8e53",
            }}
          />
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ alignSelf: "center" }}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      <Modal
        visible={!!selectedProduct}
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
                  uri: `https://picsum.photos/300/300?'`,
                }}
                style={HomeScreen_styles.image}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View>
                  <Text style={HomeScreen_styles.ModalProductName}>
                    {selectedProduct?.name}
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    {selectedProduct?.price}
                  </Text>
                </View>
                <View>
                  <Text style={HomeScreen_styles.ModalProductLocation}>
                    <IconButton
                      icon="map-marker"
                      size={20}
                      onPress={() => console.log("Pressed")}
                    />
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    {selectedProduct?.location}
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>
                  Comments:
                </Text>
                <Text style={HomeScreen_styles.ModalProductDescription}>
                  {selectedProduct?.details}
                </Text>
              </View>
            </View>
          </ScrollView>
          <Button
            onPress={() => {
              closeModal();
              setShowEditProductModal(true);
            }}
            title="Edit"
            buttonStyle={{
              backgroundColor: "#fc8e53",
              width: 200,
              borderRadius: 20,
              marginTop: 20,
            }}
          />
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.container}>
          <BottomSheet
            isVisible={ShowAddProductModal}
            containerStyle={styles.bottomSheetContainer}
            onBackdropPress={() => setShowAddProductModal(false)}
            backdropStyle={styles.backdrop}
          >
            <View style={styles.content}>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 28 }}>Add Product</Text>
                <Text>Add your product info.</Text>
              </View>

              <ScrollView style={{ width: "100%" }}>
                <View>
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Product name"
                    value={productName}
                    onChangeText={setProductName}
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Price"
                    value={price}
                    onChangeText={setPrice}
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="WhatsApp number"
                    value={whatsappNumber}
                    onChangeText={setwhatsappNumber}
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Comments"
                    value={comments}
                    onChangeText={setComments}
                    multiline
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextInput
                      style={{ backgroundColor: "#fff", flex: 1 }}
                      label="Location (city)"
                      value={locationName}
                      onChangeText={setLocation}
                    />
                    <IconButton
                      icon="map-marker"
                      iconColor="grey"
                      size={25}
                      style={{ marginLeft: -47 }}
                      onPress={() => {
                        handleLocationRequest();
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setFABIsVisible(true);
                      setOpen(true);
                    }}
                  >
                    <View
                      style={{
                        height: 50,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 10,
                        borderRadius: 5,
                        borderColor: "#ccc",
                        borderWidth: 1,
                      }}
                    >
                      <Text>Select Image</Text>
                    </View>
                  </TouchableOpacity>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 100, height: 100, marginBottom: 20 }}
                    />
                  )}
                </View>

                <View
                  style={{ alignItems: "center", width: "100%", marginTop: 20 }}
                >
                  <Button
                    title="Add product"
                    onPress={handleAddProduct}
                    buttonStyle={{
                      backgroundColor: "#fc8e53",
                      width: 200,
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                  />
                  <Button
                    onPress={() => setShowAddProductModal(false)}
                    title="Cancel"
                    buttonStyle={{
                      backgroundColor: "#adadad",
                      width: 200,
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                  />
                </View>
              </ScrollView>
              {isFABVisible && (
                <SpeedDial
                  isOpen={open}
                  icon={{ name: "edit", color: "#fff" }}
                  openIcon={{ name: "close", color: "#fff" }}
                  onClose={() => {
                    setOpen(false);
                    setFABIsVisible(false);
                  }}
                >
                  <SpeedDial.Action
                    icon={{ name: "image", color: "#fff" }}
                    title="Gallery"
                    onPress={() => {
                      setOpen(false);
                      setFABIsVisible(false);
                      selectImage();
                    }}
                  />
                  <SpeedDial.Action
                    icon={{ name: "photo-camera", color: "#fff" }}
                    title="Camera"
                    onPress={() => {
                      setOpen(false);
                      setFABIsVisible(false);
                      openCamera();
                    }}
                  />
                </SpeedDial>
              )}
            </View>
          </BottomSheet>
        </View>
        <View style={styles.container}>
          <BottomSheet
            isVisible={ShowEditProductModal}
            containerStyle={styles.bottomSheetContainer}
            onBackdropPress={() => setShowEditProductModal(false)}
            backdropStyle={styles.backdrop}
          >
            <View style={styles.content}>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 28 }}>Edit</Text>
                <Text>Make changes to your product info here.</Text>
              </View>
              <ScrollView style={{ width: "100%" }}>
                <View>
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Product name"
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Price"
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Comments"
                    multiline
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Location"
                  />
                  <TextInput
                    style={{ backgroundColor: "#fff" }}
                    label="Image"
                  />
                </View>

                <View
                  style={{ alignItems: "center", width: "100%", marginTop: 20 }}
                >
                  <Button
                    title="Save changes"
                    buttonStyle={{
                      backgroundColor: "#fc8e53",
                      width: 200,
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                  />
                  <Button
                    onPress={() => setShowEditProductModal(false)}
                    title="Cancel"
                    buttonStyle={{
                      backgroundColor: "#adadad",
                      width: 200,
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </BottomSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerFAB: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 16,
  },
  fab: {
    backgroundColor: "#03dac4", // Custom background color
  },
  content: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    height: 600,
    alignItems: "flex-start",
  },
});

export default UserProductScreen;
