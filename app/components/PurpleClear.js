import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




function PurpleClear({navigation}) {


    const [scanned, setScanned] = useState(false);

    const clearItems = () => {
        let data = 'Clear';
        setScanned(true);
        console.log({data});
        
          fetch('https://tipjar-updated.mybluemix.net/purpleclear',{
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
    

   
     <View style={{ position: "absolute", right: 150, top: 150, width: 200}}>
                <Button title={'Clear All'} onPress={clearItems}/>
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

export default PurpleClear;
  
