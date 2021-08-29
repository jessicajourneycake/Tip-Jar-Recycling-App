import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReceiptScanScreen from '../screens/ReceiptScanScreen';


import InUseNavigator from './InUseNavigator';
import BarcodeNavigator from './BarcodeNavigator';
import VirtualBinNavigator from './VirtualBinNavigator';
import TipJarNavigator from './TipJarNavigator';






const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    
    <Tab.Navigator>
         <Tab.Screen
            name="Tip Jar" 
            component={TipJarNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="cash" color={color} size={size} />
            }}
        />
         <Tab.Screen
            name="Receipt" 
            component={ReceiptScanScreen} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            }}
        />
         <Tab.Screen
            name="In Use" 
            component={InUseNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
            }}
        />
       <Tab.Screen
            name="Recycle" 
            component={BarcodeNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="barcode" color={color} size={size} />
            }}
        />
        <Tab.Screen
            name="Virtual Bins" 
            component={VirtualBinNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="trash-can-outline" color={color} size={size} />
            }}
        />
       
       
    </Tab.Navigator>
)

export default AppNavigator;