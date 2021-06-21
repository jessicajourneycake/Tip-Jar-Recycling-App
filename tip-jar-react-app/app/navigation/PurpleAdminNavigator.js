import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrangeScan from '../screens/OrangeScan';

import OrangeStep2 from '../screens/OrangeStep2';
import PurpleScan from '../screens/PurpleScan';
import PurpleStep2 from '../screens/PurpleStep2';





const Stack = createStackNavigator();

const PurpleAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Purple Scan" component={PurpleScan}  />
    <Stack.Screen name="Purple Step 2" component={PurpleStep2} />
</Stack.Navigator>
)

export default PurpleAdminNavigator;