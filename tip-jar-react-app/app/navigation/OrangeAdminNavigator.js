import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrangeScan from '../screens/OrangeScan';

import OrangeStep2 from '../screens/OrangeStep2';





const Stack = createStackNavigator();

const OrangeAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Orange Scan" component={OrangeScan}  />
    <Stack.Screen name="Orange Step 2" component={OrangeStep2} />
</Stack.Navigator>
)

export default OrangeAdminNavigator;