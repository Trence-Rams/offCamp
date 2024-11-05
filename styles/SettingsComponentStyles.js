import { StyleSheet } from "react-native";

const SettingsComponentStyles = StyleSheet.create({
  settingsContainer: {},
  headerText: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
  touchable: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginRight: "50%",
    paddingVertical: 10,
  },
  bottomSheetContainer: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "flex-start",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    height: 400,
  },
  modalHeader: {
    marginBottom: 50,
  },
  modalTitle: {
    fontSize: 28,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#252525",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: "#adadad",
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default SettingsComponentStyles;
