import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from './ListingEditScreen';
import FeedNavigator from '../navigation/FeedNavigator';
import TipJarNavigator from '../navigation/TipJarNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RecycleNavigator from '../navigation/RecycleNavigator';




const Tab = createBottomTabNavigator();

const LoginScreen = ({navigation}) => (
    <>
    <View style={{backgroundColor: "white"}}>
  
    </View>
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
                <MaterialCommunityIcons name="home" color={color} size={size} />
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
            name="Tip Jar" 
            component={ListingEditScreen} 
            options={{
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="trash-can-outline" color={color} size={size} />
            }}
        />
       
    </Tab.Navigator>

    </>
)

export default LoginScreen;