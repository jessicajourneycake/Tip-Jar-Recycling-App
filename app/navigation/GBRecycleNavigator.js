import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GBBarcodeScreen from '../screens/GBBarcodeScreen';




const Stack = createStackNavigator();

const GBRecycleNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="GBRecycle" component={GBBarcodeScreen} options={{ headerShown: false}}  />
    </Stack.Navigator>
);

export default GBRecycleNavigator;