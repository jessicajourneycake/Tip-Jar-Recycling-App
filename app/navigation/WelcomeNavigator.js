import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScreen from '../screens/ReceiptScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoldenBinAdmin from '../screens/GoldenBinAdmin';
import TipJarScreen from '../screens/TipJarScreen';
import AppNavigator from './AppNavigator';
import GBAppNavigator from './GBAppNavigator';
import ReceiptLog from '../screens/ReceiptLog';
import GBReceiptLog from '../screens/GBReceiptLog';
import GBAdminNavigator from './GBAdminNavigator';
import Map from '../components/Map';



const Stack = createStackNavigator();

const WelcomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false, }}  />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Gold" component={GBAppNavigator} options={{ headerShown: false}}  />
        <Stack.Screen name="Admin" component={GBAdminNavigator} options={{ headerShown: false}}  />
        <Stack.Screen name="Log" component={ReceiptLog} options={{ headerShown: false}}  />
        <Stack.Screen name="GBLog" component={GBReceiptLog} options={{ headerShown: false}}  />
    </Stack.Navigator>
);

export default WelcomeNavigator;