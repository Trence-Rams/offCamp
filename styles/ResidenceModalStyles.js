import { StyleSheet } from "react-native";

const ResidenceModalStyles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",

    alignSelf: "center",

    borderRadius: 15,
    marginVertical: "50%",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  bottomSheetContainer: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    height: 600,
  },
  ModalResidenceName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 8,
    alignSelf: "flex-start",
    maxWidth: 150,
  },
  ModalResidencePrice: {
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
    width: "100%",
    alignSelf: "center",
  },
  centeredContainer: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 365,
    height: 250,
    borderRadius: 20,
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
    gap: 5,
    justifyContent: "flex-start",
    width: "100%",
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  rateUsText: { color: "#007BFF", fontWeight: "bold", fontSize: 16 },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
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

export default ResidenceModalStyles;
