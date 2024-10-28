import { StyleSheet } from "react-native";

const ProductModalStyles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    width: "99%",
    alignSelf: "center",
    height: "75%",
    borderRadius: 15,
    marginVertical: "50%",
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 100,
  },
  ModalProductName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
    maxWidth: 150,
  },
  ModalProductPrice: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  scrollContainer: {
    width: "95%",
    alignSelf: "center",
  },
  centeredContainer: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    justifyContent: "flex-start",
    width: "100%",
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
  },
  streetAddress: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
    alignSelf: "flex-start",
    maxWidth: 150,
  },
});

export default ProductModalStyles;
