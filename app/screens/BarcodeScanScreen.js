import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMessage from "../components/BarcodeMessage";


function BarcodeScanScreen({ navigation }) {
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
    
      fetch('https://tipjar-updated.mybluemix.net/scanbarcode',{
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
    <View style={{flexDirection: "column", paddingTop: 10,width: "100%", height: 90, justifyContent: "center", alignItems: "center", backgroundColor: "peachpuff"}}>
      <Text style={{right: 30, top: 15, fontFamily: "Menlo", fontSize: 20, fontWeight: "bold"}} numberOfLines={1}>Recycle: Scan Barcode</Text>
      <TouchableOpacity onPress={() => navigation.reset({index: 0,  routes: [{ name: 'Barcode' }],})} style={{ top: -15, alignContent: "center", marginLeft: 340, width: 100, height: 30,}}><Image source={require('../assets/refresh.png')} style={{width: 40, height: 40}}/></TouchableOpacity>
    </View>
    <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </View>
  <View style={{height: 300, backgroundColor: "peachpuff"}}>
  <BarcodeMessage />

    
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
export default BarcodeScanScreen;