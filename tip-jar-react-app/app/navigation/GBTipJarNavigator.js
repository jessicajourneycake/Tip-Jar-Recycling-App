import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/ProductsInUse';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import BarcodeScreen from '../screens/BarcodeScreen';

import ProductsInUse from '../screens/ProductsInUse';
import AppNavigator from './AppNavigator';
import GBTipJarScreen from '../screens/GBTipJarScreen';

const Stack = createStackNavigator();

const GBTipJarNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="GBTabs" component={GBTipJarScreen} options={{ headerShown: false}}/>
       
       
    </Stack.Navigator>
);

export default GBTipJarNavigator;