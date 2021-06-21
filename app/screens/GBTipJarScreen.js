import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import TipJar0 from '../components/TipJar/TipJar0';
import TipJar1 from '../components/TipJar/TipJar1';
import TipJar2 from '../components/TipJar/TipJar2';
import TipJar3 from '../components/TipJar/TipJar3';
import TipJar4 from '../components/TipJar/TipJar4';
import TipJar5 from '../components/TipJar/TipJar5';
import TipJar6 from '../components/TipJar/TipJar6';
import TipJar7 from '../components/TipJar/TipJar7';
import TipJar8 from '../components/TipJar/TipJar8';
import TipJar9 from '../components/TipJar/TipJar9';
import GBVirtualTip from '../components/GBVirtualTip';

function GBTipJarScreen({navigation}) {
    const [scanned, setScanned] = useState(false);

    const redeemTips = () => {
        let data = 'Hello';
        setScanned(true);
        console.log({data});
        
          fetch('https://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/clicked',{
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
          return response.json()
          }).catch(error => console.log(error));
        
      };
    return (
        <>
       
               
        <View style={{width: '100%', height: 210, backgroundColor: "aliceblue"}}>
               
               <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ marginTop: 30, alignContent: "center", marginLeft: 290, width: 100, height: 30, backgroundColor: "peachpuff", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 14, fontWeight: "bold", marginTop: 5, marginLeft: 25}}>Logout</Text></TouchableOpacity>
               <View style={{flexDirection: "row"}}>
                   <View>
                   <Image source={require("../assets/logo.png")} style={{marginTop: -5, marginLeft: 90, height: 130, width: 95, resizeMode: "contain"}}/>
                   </View>
               <View style={{width: 300, height: 50, top: 20, left: 10}}>
               <GBVirtualTip style={{width: 150, left: 5}} />
               </View>
              
              
               <View style={{ position: "absolute", right: 10, bottom: 0, width: 200}}>
                <TouchableOpacity onPress={redeemTips} style={{backgroundColor: "lightsteelblue", borderRadius: 15,  bottom: 10, height: 30, width: 150}}>
                    <Text style={{top: 5, left: 20, fontSize: 16, fontFamily: "Menlo", fontWeight: "bold"}}>Redeem Tips</Text>

                </TouchableOpacity>
                </View>
             
           
               </View>
             
           </View>
         
         
               <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", paddingTop: 5, flexDirection: "row"}}>
                   <View style={{borderRightWidth: 2, paddingRight: 37}}>
                   <Text style={{fontSize: 16, paddingLeft: 37, height: 30, fontFamily: "Menlo", fontWeight: '600', top: 5}}>Date</Text>
                   </View>
                   <View style={{borderRightWidth: 2, paddingRight: 20}}>
                   <Text style={{fontSize: 16, paddingLeft: 20, height: 30, fontFamily: "Menlo", fontWeight: '600', top: 5}}>Color</Text>
                   </View>
                   <View style={{borderRightWidth: 2, paddingRight: 25}}>
                   <Text style={{fontSize: 16, paddingLeft: 25, height: 30, fontFamily: "Menlo", fontWeight: '600', top: 5}}>Quantity</Text>
                   </View>
                   <View>
                   <Text style={{marginLeft: 25, top: 5, fontSize: 16, right: 7, height: 30, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>

                   </View>
                   </View>
        <ScrollView>
            <TipJar0 />
            <TipJar1 />
            <TipJar2 />
            <TipJar3 />
            <TipJar4 />
            <TipJar5 />
            <TipJar6 />
            <TipJar7 />
            <TipJar8 />
            <TipJar9 />

        </ScrollView>
        </>
    );
}

export default GBTipJarScreen;