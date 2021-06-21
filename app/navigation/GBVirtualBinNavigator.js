import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScreen from '../screens/ReceiptScreen';
import ProductsInUse from '../screens/ProductsInUse';
import GBVirtualBinScreen from '../screens/GBVirtualBinScreen';


const Stack = createStackNavigator();

const GBVirtualBinNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="GBVirtual" component={GBVirtualBinScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
);

export default GBVirtualBinNavigator;