import { StyleSheet, Platform } from "react-native";

const SafeView = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
});

export default SafeView




