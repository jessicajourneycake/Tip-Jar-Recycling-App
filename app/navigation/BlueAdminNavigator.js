import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrangeScan from '../screens/OrangeScan';

import OrangeStep2 from '../screens/OrangeStep2';
import BlueScan from '../screens/BlueScan';
import BlueStep2 from '../screens/BlueStep2';





const Stack = createStackNavigator();

const BlueAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Blue Scan" component={BlueScan}  />
    <Stack.Screen name="Blue Step 2" component={BlueStep2} />
</Stack.Navigator>
)

export default BlueAdminNavigator;