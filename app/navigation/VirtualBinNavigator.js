import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReceiptLog from '../screens/ReceiptLog';
import InUseScreen from '../screens/InUseScreen';
import MainVirtualRed from '../screens/MainVirtualRed';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GreenScreen from '../screens/GreenScreen';

import OrangeScreen from '../screens/OrangeScreen';
import PurpleScreen from '../screens/PurpleScreen';


const Tab = createMaterialTopTabNavigator();

function VirtualBinNavigator(props) {
    return (
        <>
          
        <Tab.Navigator style={{top: 20}} tabBarOptions={{ showIcon: true}}>
        
           
                <Tab.Screen 
            
            component={GreenScreen}
            name="Green"
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="triangle" color="green" size={20} />
            }}>
                
                </Tab.Screen>
                <Tab.Screen 
            
            component={PurpleScreen}
            name="Purple"
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="circle" color="purple" size={20} />
            }}>
                
                </Tab.Screen>
                <Tab.Screen 
            
            component={OrangeScreen}
            name="Orange"
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="square" color="orange" size={20} />
            }}>
                
                </Tab.Screen>
        
        
      </Tab.Navigator>
      </>
    );
}

export default VirtualBinNavigator;