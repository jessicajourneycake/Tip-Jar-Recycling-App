import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RedScan from '../screens/RedScan';

import RedStep2 from '../screens/RedStep2';





const Stack = createStackNavigator();

const RedAdminNavigator = () => (
    
    <Stack.Navigator>
   
    <Stack.Screen name="Red Scan" component={RedScan}  />
    <Stack.Screen name="Red Step 2" component={RedStep2} />
</Stack.Navigator>
)

export default RedAdminNavigator;