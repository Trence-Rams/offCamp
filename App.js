import { NavigationContainer } from "@react-navigation/native";
import Mystack from "./nativeStack";
import SafeView from "./styles/SafeView";
import { SafeAreaView } from "react-native";
import { AuthProvider } from "./Context/AuthContext";

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
