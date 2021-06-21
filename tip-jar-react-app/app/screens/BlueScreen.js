import { ScrollView, View, Text, ImageBackground, Image, Button} from 'react-native';

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Blue0 from '../components/Blue/Blue0';
import Blue1 from '../components/Blue/Blue1';
import Blue2 from '../components/Blue/Blue2';
import Blue3 from '../components/Blue/Blue3';
import Blue4 from '../components/Blue/Blue4';
import Blue5 from '../components/Blue/Blue5';
import Blue6 from '../components/Blue/Blue6';

import GBMultiVirtual1 from '../components/Multipack/GBMultiVirtual1';
import MainBlue from './MainBlue';
import GBMultiVirtual from './GBMultiVirtual';
import CurbsideBlue from '../components/CurbsideBlue';

const Tab = createMaterialTopTabNavigator();

function BlueScreen({navigation}) {
    return (
        <>
         
         <View style={{height: 70, backgroundColor: "blue", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white", fontFamily: "Menlo", fontSize: 26}}>Blue Bin: Coca Cola</Text>
        </View>
        <View>
        <ImageBackground style={{width: 500, height: 230, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/blueqr.png')} />
        <CurbsideBlue />
        </ImageBackground>
        </View>
      
      
     
            
            <Tab.Navigator>
             <Tab.Screen 
            
            component={MainBlue}
            name="Products"
           />
             <Tab.Screen 
            name="Multi-Pack Products" 
            component={GBMultiVirtual}
            />
      
    
      </Tab.Navigator>

  
        </>
    );
}

export default BlueScreen;