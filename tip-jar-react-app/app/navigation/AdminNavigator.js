import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';

import AppNavigator from './AppNavigator';
import SelectColor from '../screens/SelectColor';

import GreenStep1 from '../screens/GreenStep1';
import GreenStep2 from '../screens/GreenStep2';




const Stack = createStackNavigator();

const AdminNavigator = () => (
    <Stack.Navigator>
         <Stack.Screen name="SelectColor" component={SelectColor} options={{ headerShown: false, }}  />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Green1" component={GreenStep1} options={{ headerShown: false, }}/>
        <Stack.Screen name="Green2" component={GreenStep2} options={{ headerShown: false, }}/>

       

         
    

    </Stack.Navigator>
);

export default AdminNavigator;