import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PurpleScreen from './PurpleScreen';
import RedScreen from './RedScreen';
import YellowScreen from './YellowScreen';
import GreenScreen from './GreenScreen';
import BlueScreen from './BlueScreen';
import OrangeScreen from './OrangeScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

function GBVirtualBinScreen(props) {
    return (
        <>
          
        <Tab.Navigator style={{top: 25}} tabBarOptions={{ showIcon: true}}>
        <Tab.Screen 
            
            component={PurpleScreen}
            name="P"
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="circle" color="purple" size={20} />
            }}>
                
                </Tab.Screen>
        <Tab.Screen 
            name="R" 
            component={RedScreen}
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="circle-outline" color="red" size={20} />
            }}/>
        <Tab.Screen 
            name="Y" 
            component={YellowScreen}
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="arrow-right-bold" color="yellow" size={20} />
            }}/>
        <Tab.Screen 
            name="G" 
            component={GreenScreen}
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="triangle" color="green" size={20} />
            }}/> 
        <Tab.Screen 
            name="B" 
            component={BlueScreen}
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="square-outline" color="blue" size={20} />
            }}/> 
        <Tab.Screen 
            name="O" 
            component={OrangeScreen} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="octagon" color="orange" size={20} />
            }}/>
      </Tab.Navigator>
      </>
    );
}

export default GBVirtualBinScreen;