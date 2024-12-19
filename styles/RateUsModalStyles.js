import { StyleSheet } from "react-native";

const RateUsModalStyles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    height: 250,
  },
  ratingContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    margin: 10,
  },
  cancelButton: {
    backgroundColor: "#adadad",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#252525",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  modalHeader: {
    marginBottom: 5,
  },
  modalTitle: {
    fontSize: 28,
  },
  bottomSheetContainer: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default RateUsModalStyles;
