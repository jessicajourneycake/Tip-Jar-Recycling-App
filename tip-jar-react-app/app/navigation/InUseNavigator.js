import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScreen from '../screens/ReceiptScreen';
import ProductsInUse from '../screens/ProductsInUse';
import ReceiptLog from '../screens/ReceiptLog';


const Stack = createStackNavigator();

const InUseNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsInUse} options={{ headerShown: false}} />
        <Stack.Screen name="Log" component={ReceiptLog}  />
    </Stack.Navigator>
);

export default InUseNavigator;