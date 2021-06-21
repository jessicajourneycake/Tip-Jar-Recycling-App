import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrangeScan from '../screens/OrangeScan';

import OrangeStep2 from '../screens/OrangeStep2';
import BlueScan from '../screens/BlueScan';
import BlueStep2 from '../screens/BlueStep2';
import GreenScan from '../screens/GreenScan';
import GreenStep2 from '../screens/GreenStep2';





const Stack = createStackNavigator();

const GreenAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Green Scan" component={GreenScan}  />
    <Stack.Screen name="Green Step 2" component={GreenStep2} />
</Stack.Navigator>
)

export default GreenAdminNavigator;