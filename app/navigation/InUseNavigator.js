import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptLog from '../screens/ReceiptLog';
import InUseScreen from '../screens/InUseScreen';
import WelcomeScreen from '../screens/WelcomeScreen';




const Stack = createStackNavigator();

const InUseNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="InUseScreen" component={InUseScreen} options={{ headerShown: false, gestureEnabled: false }}  />
        <Stack.Screen name="Receipt Log" component={ReceiptLog}  />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false, }}  />
        

    </Stack.Navigator>
);

export default InUseNavigator;