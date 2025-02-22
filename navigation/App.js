import { NavigationContainer } from "@react-navigation/native";
import Mystack from "./nativeStack";
import SafeView from "../styles/SafeView";
import { SafeAreaView } from "react-native";
import { AuthProvider } from "../context/AuthContext";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  return (
    <SafeAreaView style={SafeView.androidSafeArea}>
      <AuthProvider>
        <NavigationContainer>
          <Mystack />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}
