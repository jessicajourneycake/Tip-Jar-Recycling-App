import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { LogBox } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import WelcomeNavigator from "./app/navigation/WelcomeNavigator";




export default function App() {
  return (
    LogBox.ignoreAllLogs(),
    <NavigationContainer>
      <WelcomeNavigator />
    </NavigationContainer>
  );
}
