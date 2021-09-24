import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TipJarFlatList from '../components/TipJarFlatList';
import TipJarSum from '../components/TipJarSum';




function TipJarScreen({navigation}) {


    const [scanned, setScanned] = useState(false);

    const redeemTips = () => {
        let data = 'Hello';
        setScanned(true);
        console.log({data});
        
          fetch('https://tipjar-updated.mybluemix.net/clicked',{
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
    
     <TipJarFlatList />
     <View style={{ position: "absolute", right: 20, top: 140, width: 200}}>
                <TipJarSum />
                </View>
     <View style={{ position: "absolute", right: 50, top: 150, width: 200}}>
                <Button title={'Redeem Tips'} onPress={redeemTips}/>
                </View>
    
     </>
  
   )}


const styles = StyleSheet.create({
  container: {
  left: 10,
  },
  item: {
    height: 60,
    top: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: "row"
  },
  text: {
    color: "black"
  }
})

export default TipJarScreen;
  
