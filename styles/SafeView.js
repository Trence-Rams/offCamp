import { StyleSheet, Platform,StatusBar} from "react-native";

const SafeView = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
});

export default SafeView




