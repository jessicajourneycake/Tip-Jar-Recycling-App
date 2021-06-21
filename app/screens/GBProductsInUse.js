import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Screen from "../components/Screen";

import GBInUse0 from '../components/GBInUse/GBInUse0';
import GBInUse1 from '../components/GBInUse/GBInUse1';
import GBInUse2 from '../components/GBInUse/GBInUse2';
import GBInUse3 from '../components/GBInUse/GBInUse3';
import GBInUse4 from '../components/GBInUse/GBInUse4';
import GBInUse5 from '../components/GBInUse/GBInUse5';
import GBInUse6 from '../components/GBInUse/GBInUse6';
import GBInUse7 from '../components/GBInUse/GBInUse7';
import GBInUse8 from '../components/GBInUse/GBInUse8';
import GBInUse9 from '../components/GBInUse/GBInUse9';
import GBMultiInUse1 from '../components/Multipack/GBMultiInUse1';
import GBMultiPack from './GBMultiPack';
import GBMainInUse from './GBMainInUse';


const Tab = createMaterialTopTabNavigator();

function GBProductsInUse({navigation}) {

    return (
        <SafeAreaView style={{flex: 1}}>
                  
             <View style={{width: '100%', height: 210}}>
                <ImageBackground source={require('../assets/back.png')} style={{marginRight: 50, width: 600, height: 210, opacity: 0.95}}>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ marginTop: 15, alignContent: "center", marginLeft: 290, width: 100, height: 30, backgroundColor: "peachpuff", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", marginTop: 5, marginLeft: 25}}>Logout</Text></TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                <View style={{marginLeft: 140, marginTop: 8, width: 200}}>
                <Text style={{fontSize: 35, fontFamily: "Menlo", }} numberOfLines={2}>Products In Use</Text>
                </View>
                
                <View style={{marginTop: 115, right: 80,backgroundColor: "lightsteelblue", height: 30, width: 140, borderRadius: 15, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Receipt Log")}><Text style={{fontSize: 14, fontFamily: "Menlo", fontWeight: "bold", color: "black"}}>Receipt Log</Text></TouchableOpacity>
                </View>
              
                </View>
                </ImageBackground>
            </View>

          
          
                
        <Tab.Navigator>
        <Tab.Screen 
            
            component={GBMainInUse}
            name="Products In Use"
           />
        <Tab.Screen 
            name="Multi-Pack Products" 
            component={GBMultiPack}
            />
      
    
      </Tab.Navigator>
            </SafeAreaView>
            
           
    );
}

export default GBProductsInUse;