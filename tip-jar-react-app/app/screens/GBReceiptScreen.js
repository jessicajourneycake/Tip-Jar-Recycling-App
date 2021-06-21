import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Image } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ReceiptCount2 from "../components/ReceiptCount2";
import ReceiptMessage2 from "../components/ReceiptMessage2";
import ReceiptSum2 from "../components/ReceiptSum2";
import ReceiptSum3 from "../components/ReceiptSum3";
import ReceiptCount3 from "../components/ReceiptCount3";

function GBReceiptScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    
      fetch('https://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/test',{
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response){
      return response.json()
      }).catch(error => console.log(error));
    
  };

  
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={{paddingTop: 10,width: "100%", height: 100, justifyContent: "center", alignItems: "center", backgroundColor: "aliceblue"}}>
      <Text style={{top: 5, fontFamily: "Menlo", fontSize: 24, fontWeight: "bold"}} numberOfLines={2}>Scan QR Code on Receipt or at Checkout</Text>
      
    </View>
    <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </View>
  
  <View>
    <ImageBackground style={{height: 270, width: 700, right: 80,resizeMode: "contain"}}source={require('../assets/back.png')}>
  <View style={{height: 65,justifyContent: "center", alignItems: "center"}}>
  
  <ReceiptMessage2 />
  </View>

  <View style={{flexDirection: "row",height: 300,  width: "100%", }}>
  
    <View style={{bottom: 15}}>
      <View>
    <Text style={{width: 150, marginTop: 10, marginLeft: 150, fontFamily: "Menlo", fontSize: 16, fontWeight: "bold"}} numberOfLines={2}># of Products Added:</Text>
    <ReceiptCount2 />
    </View>
    <View>
    <Text style={{width: 200, bottom: 35, marginTop: 5, marginLeft: 150, fontFamily: "Menlo", fontSize: 16, fontWeight: "bold"}} numberOfLines={2}># of Multi-Packs Added:</Text>
   <ReceiptCount3 />
    </View> 
    </View>
    
   
  </View>
  <View style={{flexDirection: "row"}}>
    <View style={{bottom: 305, left: 320}}>
  <Image style={{height: 70, width: 60, resizeMode: "contain"}}source={require('../assets/logo.png')}></Image>
  </View>
  <View style={{marginLeft: 40}}>
   <ReceiptSum2 />
   </View>
   </View>
   <View style={{flexDirection: "row"}}>
    <View style={{bottom: 288, left: 318}}>
  <Image style={{height: 70, width: 60, resizeMode: "contain"}}source={require('../assets/logo.png')}></Image>
  </View>
  <View>
   <ReceiptSum3 />
   </View>
   </View>
  </ImageBackground>
  </View>
 
  
</>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "aliceblue"
  }
})
export default GBReceiptScreen;