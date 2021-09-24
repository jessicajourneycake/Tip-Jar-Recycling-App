import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScanScreen from '../screens/ReceiptScanScreen';



const Stack = createStackNavigator();

const ReceiptScanNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Receipt" component={ReceiptScanScreen} options={{ headerShown: false, }}  />


    </Stack.Navigator>
);

export default ReceiptScanNavigator;