import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import StreetViewScreen from "../screens/StreetViewScreen";

const stack = createNativeStackNavigator();

const Mystack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="StreetView"
        component={StreetViewScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Sign up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="Account"
        component={UserProfileScreen}
        options={{ headerShown: true }}
      />
    </stack.Navigator>
  );
};

export default Mystack;
