import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import TipJarNavigator from './TipJarNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from '../screens/LoginScreen';
import RecycleNavigator from './RecycleNavigator';
import FeedNavigator from './FeedNavigator';
import InUseNavigator from './InUseNavigator';




const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    
    <Tab.Navigator>
         <Tab.Screen
            name="Home" 
            component={TipJarNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="Recycle" 
            component={RecycleNavigator} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
            }}
        />
        
        <Tab.Screen 
            name="Receipt Scan" 
            component={FeedNavigator} 
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
                <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="Golden Bins" 
            component={ListingEditScreen} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="trash-can-outline" color={color} size={size} />
            }}
        />
       
    </Tab.Navigator>
)

export default AppNavigator;