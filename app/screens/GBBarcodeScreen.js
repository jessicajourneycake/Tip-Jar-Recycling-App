import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ScrollView } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import BarcodeScan1 from "../components/BarcodeScan/BarcodeScan1";

import ScanBarcode from "./ScanBarcode";
import GBScanBarcode from "./GBScanBarcode";

function GBBarcodeScreen({ navigation }) {
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
    
      fetch('https://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/virtualbin',{
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
     <>
    <View style={{paddingTop: 10,width: "100%", height: 90, justifyContent: "center", alignItems: "center", backgroundColor: "peachpuff"}}>
      <Text style={{top: 5, fontFamily: "Menlo", fontSize: 20, fontWeight: "bold"}} numberOfLines={1}>Recycle: Scan Barcode</Text>
      
    </View>
    <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </View>
  <View style={{height: 300, backgroundColor: "peachpuff"}}>
    
    <GBScanBarcode style={{backgroundColor: "peachpuff"}} />

    
  </View>
  
</>
  
</>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default GBBarcodeScreen;