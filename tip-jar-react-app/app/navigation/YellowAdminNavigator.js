import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrangeScan from '../screens/OrangeScan';

import OrangeStep2 from '../screens/OrangeStep2';
import BlueScan from '../screens/BlueScan';
import BlueStep2 from '../screens/BlueStep2';
import YellowScan from '../screens/YellowScan';
import YellowStep2 from '../screens/YellowStep2';





const Stack = createStackNavigator();

const YellowAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Yellow Scan" component={YellowScan}  />
    <Stack.Screen name="Yellow Step 2" component={YellowStep2} />
</Stack.Navigator>
)

export default YellowAdminNavigator;