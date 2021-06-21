import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BarcodeScreen from '../screens/BarcodeScreen';



const Stack = createStackNavigator();

const RecycleNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Recycle" component={BarcodeScreen} options={{ headerShown: false}}  />
    </Stack.Navigator>
);

export default RecycleNavigator;