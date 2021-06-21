import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScreen from '../screens/ReceiptScreen';
import ProductsInUse from '../screens/ProductsInUse';
import GBProductsInUse from '../screens/GBProductsInUse';
import GBReceiptLog from '../screens/GBReceiptLog';


const Stack = createStackNavigator();

const GBInUseNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="In Use" component={GBProductsInUse} options={{ headerShown: false}} />
        <Stack.Screen name="Receipt Log" component={GBReceiptLog} />
    </Stack.Navigator>
);

export default GBInUseNavigator;