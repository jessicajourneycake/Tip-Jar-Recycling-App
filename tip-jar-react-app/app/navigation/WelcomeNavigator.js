import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import Map from '../screens/Map';
import AppNavigator from './AppNavigator';
import AdminNavigator from './AdminNavigator';




const Stack = createStackNavigator();

const WelcomeNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Gold" component={AppNavigator} options={{ headerShown: false, }}  />
        <Stack.Screen name="Admin" component={AdminNavigator} />
        <Stack.Screen name="Map" component={Map} />

    </Stack.Navigator>
);

export default WelcomeNavigator;