import React, { useEffect, useState } from 'react';
import { View, Text, Image, } from 'react-native';
import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker} from 'react-native-maps';


export default class Map extends React.Component {


  
  render() {
    return (
        <>
        <View style={{top: 30,  alignItems: "center"}}>
            <Text style={{fontSize: 26, fontFamily: "Menlo"}}>Golden Bins Near You</Text>
        </View>
        
       
        <MapView
        style={{height: 400, bottom: -60,width: "100%"}}
        initialRegion={{
          latitude: 42.3265,
          longitude: -71.0621,
          latitudeDelta: 0.0190,
          longitudeDelta: 0.01710,
        }}
      >
    
          <Marker
  coordinate={{ latitude : 42.3290, longitude : -71.0634}}
  title="Target" 
  pinColor="blue"
  description = "Red/Yellow/Blue/Green/Orange/Purple"
  
/>
  



<Marker
  coordinate={{ latitude : 42.32657, longitude : -71.06503}}
  title="Stop & Shop"
  description = "Red/Yellow/Blue/Green/Orange/Purple"
  pinColor="blue"
/>


<Marker
  coordinate={{ latitude : 42.32629, longitude : -71.06194}}
  title="Olive Garden"
  description = "Yellow"
/>
 


          </MapView>
          <View style={{top: 20, height: 130 }}>
            <View style={{left: 30, top: 70,height: 30, width: 30, backgroundColor: "blue"}}></View>
            <Text style={{fontSize: 16, fontFamily: "Menlo",top: 45, left: 70, fontWeight: "bold"}}>All Golden Bin Colors</Text>
           
            <View style={{left: 30, top: 90,height: 30, width: 30, backgroundColor: "red"}}></View>
            <Text style={{fontSize: 16, fontFamily: "Menlo",top: 65, left: 70, fontWeight: "bold"}}>Limited Golden Bin Colors</Text>
           
        </View>
          </>
    );
  }
}
  