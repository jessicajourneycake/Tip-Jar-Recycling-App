import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptScreen from '../screens/ReceiptScreen';
import ProductsInUse from '../screens/ProductsInUse';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Receipt" component={ReceiptScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
);

export default FeedNavigator;