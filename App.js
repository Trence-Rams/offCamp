import { NavigationContainer } from '@react-navigation/native';
import Mystack from './nativeStack';
import SafeView from './styles/SafeView';
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
   <SafeAreaView style={SafeView.androidSafeArea}>
        <NavigationContainer>
          <Mystack/>
        </NavigationContainer>
    </SafeAreaView>
  
  );
}


