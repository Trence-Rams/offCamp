import { StyleSheet } from "react-native";

const HomeScreen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  item: {
    width: 170,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  modalImage: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    backgroundColor: "orange",
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    paddingHorizontal: 10,
  },

  price: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  ModalProductPrice: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
  },

  ModalProductName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
    maxWidth: 150,
  },

  ModalProductDescription: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
  },

  ModalProductLocation: {
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#4285F4",
    alignSelf: "center",
    marginTop: 10,
  },

  ModalProductDescriptionHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
  },

  sellingText: {
    fontSize: 32,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: "left",
    color: "#333",
    fontWeight: "bold",
  },

  modalContainer: {
    alignItems: "center",
    width: "99%",
    alignSelf: "center",
    height: "70%",
    borderRadius: 15,
    marginVertical: "50%",
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 100,
  },
});

export default HomeScreen_styles;
