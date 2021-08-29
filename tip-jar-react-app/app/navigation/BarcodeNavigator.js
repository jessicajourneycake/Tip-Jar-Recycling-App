import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptLog from '../screens/ReceiptLog';
import InUseScreen from '../screens/InUseScreen';
import BarcodeScanScreen from '../screens/BarcodeScanScreen';




const Stack = createStackNavigator();

const BarcodeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Barcode" component={BarcodeScanScreen} options={{ headerShown: false, }}  />
        
        

    </Stack.Navigator>
);

export default BarcodeNavigator;