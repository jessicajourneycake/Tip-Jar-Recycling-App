import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SelectColor from '../screens/SelectColor';
import PurpleScan from '../screens/PurpleScan';
import RedScan from '../screens/RedScan';
import YellowScan from '../screens/YellowScan';
import GreenScan from '../screens/GreenScan';
import BlueScan from '../screens/BlueScan';
import OrangeScan from '../screens/OrangeScan';
import WelcomeNavigator from './WelcomeNavigator';
import OrangeAdminNavigator from './OrangeAdminNavigator';
import RedAdminNavigator from './RedAdminNavigator';
import PurpleAdminNavigator from './PurpleAdminNavigator';
import BlueAdminNavigator from './BlueAdminNavigator';
import YellowAdminNavigator from './YellowAdminNavigator';
import GreenAdminNavigator from './GreenAdminNavigator';





const Stack = createStackNavigator();

const GBAdminNavigator = () => (
    
    <Stack.Navigator>
    <Stack.Screen name="Golden Bin Admin" component={SelectColor} />
    <Stack.Screen name="Purple Scan" component={PurpleAdminNavigator} options={{headerShown: false}} />
    <Stack.Screen name="Red Scan" component={RedAdminNavigator} options={{headerShown: false}}/>
    <Stack.Screen name="Yellow Scan" component={YellowAdminNavigator}  options={{headerShown: false}}/>
    <Stack.Screen name="Green Scan" component={GreenAdminNavigator} options={{headerShown: false}} />
    <Stack.Screen name="Blue Scan" component={BlueAdminNavigator}  options={{headerShown: false}}/>
    <Stack.Screen name="Orange Scan" component={OrangeAdminNavigator} options={{headerShown: false}} />
   
</Stack.Navigator>
)

export default GBAdminNavigator;