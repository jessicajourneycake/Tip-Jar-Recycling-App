import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen from "../components/Screen";
import Virtual0 from '../components/Virtual/Virtual0';
import Virtual1 from '../components/Virtual/Virtual1';
import Virtual10 from '../components/Virtual/Virtual10';
import Virtual11 from '../components/Virtual/Virtual11';
import Virtual2 from '../components/Virtual/Virtual2';
import Virtual3 from '../components/Virtual/Virtual3';
import Virtual4 from '../components/Virtual/Virtual4';
import Virtual5 from '../components/Virtual/Virtual5';
import Virtual6 from '../components/Virtual/Virtual6';
import Virtual7 from '../components/Virtual/Virtual7';
import Virtual8 from '../components/Virtual/Virtual8';
import Virtual9 from '../components/Virtual/Virtual9';
import VirtualTip from '../components/VirtualTip';
import WelcomeNavigator from '../navigation/WelcomeNavigator';
import MainVirtual from './MainVirtual';
import MultiVirtualBin from './MultiVirtualBin';




function TipJarScreen({navigation}) {
    const [scanned, setScanned] = useState(false);

    const redeemTips = () => {
        let data = 'Hello';
        setScanned(true);
        console.log({data});
        
          fetch('https://tipjarjess.mybluemix.net/clicked',{
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
          return response.json()
          }).catch(error => console.log(error));
        
      };

      const Tab = createMaterialTopTabNavigator();
    return (
        <>
        <View>
          
                <View style={{width: '100%', height: 210, backgroundColor: "aliceblue"}}>
               
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ marginTop: 30, alignContent: "center", marginLeft: 290, width: 100, height: 30, backgroundColor: "peachpuff", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", marginTop: 5, marginLeft: 25}}>Logout</Text></TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                    <Image source={require("../assets/logo.png")} style={{marginTop: -15, marginLeft: 60,height: 140, width: 95, resizeMode: "contain"}}/>
                <View style={{marginLeft: 30, marginTop: 10}}>
                <Text style={{fontSize: 60, fontFamily: "Menlo"}}>$<VirtualTip /></Text>
                </View>
                <View style={{position: "absolute", left: 260, top: -10}}>
                <View style={{ position: "absolute", right: -130, top: 100, width: 200}}>
                <Button title={'Redeem Tips'} onPress={redeemTips}/>
                </View>
                </View>
                </View>
              
            </View>
        
            </View>
                         <Tab.Navigator>
                         <Tab.Screen 
                        
                        component={MainVirtual}
                        name="Products"
                       />
                         <Tab.Screen 
                        name="Multi-Pack Products" 
                        component={MultiVirtualBin}
                        />
                  
                
                  </Tab.Navigator>

            </>
           
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})
export default TipJarScreen;