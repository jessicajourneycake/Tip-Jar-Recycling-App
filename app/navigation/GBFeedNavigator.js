import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductsInUse from '../screens/ProductsInUse';
import GBReceiptScreen from '../screens/GBReceiptScreen';


const Stack = createStackNavigator();

const GBFeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="GBReceipt" component={GBReceiptScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
);

export default GBFeedNavigator;