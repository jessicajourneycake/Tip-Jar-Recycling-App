import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from '../screens/LoginScreen';
import GBTipJarNavigator from './GBTipJarNavigator';
import GBRecycleNavigator from './GBRecycleNavigator';
import GBFeedNavigator from './GBFeedNavigator';
import GBInUseNavigator from './GBInUseNavigator';
import GBVirtualBinNavigator from './GBVirtualBinNavigator';
import Map from '../components/Map';




const Tab = createBottomTabNavigator();

const GBAppNavigator = () => (
    
    <Tab.Navigator>
         <Tab.Screen
            name="Home" 
            component={GBTipJarNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="Recycle" 
            component={GBRecycleNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
            }}
        />
        
        <Tab.Screen 
            name="Receipt Scan" 
            component={GBFeedNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="In Use" 
            component={GBInUseNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="Golden Bins" 
            component={GBVirtualBinNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="trash-can-outline" color={color} size={size} />
            }}
        />
       
       
    </Tab.Navigator>
)

export default GBAppNavigator;