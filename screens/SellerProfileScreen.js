import UserProfileScreen_Styles from "../styles/UserProfileScreen_Styles";
import { Icon } from "react-native-paper";
import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import HomeScreen_styles from "../styles/HomeScreen_styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Button } from "react-native-elements";

import products from "../products";

const SellerProfileScreen = () => {
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const ProductItem = React.memo(({ item }) => (
    <TouchableOpacity
      style={HomeScreen_styles.item}
      onPress={() => handleProductPress(item)}
    >
      <Image
        source={{ uri: `https://source.unsplash.com/300x300/?${item.name}` }}
        style={HomeScreen_styles.image}
      />
      <Text style={HomeScreen_styles.name}>{item.name}</Text>
      <Text style={HomeScreen_styles.price}>{item.price}</Text>
    </TouchableOpacity>
  ));

  const renderItem = ({ item }) => <ProductItem item={item} />;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -300],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={HomeScreen_styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: headerTranslateY }],
          zIndex: 1,
          position: "absolute",
          width: "100%",
          paddingTop: 10,
        }}
      >
        <View>
          <View style={{ alignSelf: "center", paddingTop: 50 }}>
            <Icon source="account-circle" size={150} color="#adadad" />
          </View>
          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "#4d5963" }}>
              Terrence
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 500, color: "#4d5963" }}>
              0636648338
            </Text>
          </View>
        </View>
        <Text style={UserProfileScreen_Styles.settingsText}>
          Products Selling
        </Text>
      </Animated.View>

      <Animated.FlatList
        contentContainerStyle={{ paddingTop: 380, alignSelf: "center" }}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
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
                source={{ uri: `https://source.unsplash.com/300x300/` }}
                style={HomeScreen_styles.modalImage}
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
                  <Text style={HomeScreen_styles.ModalProductName}>
                    Location
                  </Text>
                  <Text style={HomeScreen_styles.ModalProductPrice}>
                    Mafikeng
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={HomeScreen_styles.ModalProductDescriptionHeading}>
                  Description:
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
              navigation.navigate("Chat");
            }}
            title="Request"
            buttonStyle={{
              backgroundColor: "#fc8e53",
              width: 200,
              borderRadius: 20,
              marginTop: 20,
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SellerProfileScreen;
