import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import SellerProfileScreen from './screens/SellerProfileScreen';
import ProductFormScreen from './screens/ProductFormScreen';


const stack = createNativeStackNavigator();

const Mystack = () => {
  return (
    <stack.Navigator>
        <stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <stack.Screen name='Sign in'  component={LoginScreen} options={{ headerShown: true }}/>   
        <stack.Screen name='Chat'  component={ChatScreen} options={{ headerShown: false }}/> 
        <stack.Screen name='Account' component={UserProfileScreen} options={{ headerShown: true }}/>
        <stack.Screen name='Profile' component={SellerProfileScreen} options={{ headerShown: true}}/>
        <stack.Screen name='Sign up' component={SignUpScreen} options={{ headerShown: true}}/>
        <stack.Screen name='Form' component={ProductFormScreen} options={{ headerShown: true}}/>
    </stack.Navigator>
  )
}

export default Mystack