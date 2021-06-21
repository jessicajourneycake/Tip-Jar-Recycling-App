import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/ProductsInUse';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import BarcodeScreen from '../screens/BarcodeScreen';
import TipJarScreen from '../screens/TipJarScreen';
import ProductsInUse from '../screens/ProductsInUse';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const TipJarNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TipJarScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Barcode" component={BarcodeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Products" component={ProductsInUse} options={{ headerShown: false}} />
       
    </Stack.Navigator>
);

export default TipJarNavigator;