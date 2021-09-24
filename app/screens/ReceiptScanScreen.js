import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import ReceiptMessage from "../components/ReceiptMessage";


function ReceiptScanScreen({ navigation }) {
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
    
      fetch('https://tipjar-updated.mybluemix.net/receipt',{
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
      <View style={{flexDirection: "column", paddingTop: 10,width: "100%", height: 85, justifyContent: "center", alignItems: "center", backgroundColor: "aliceblue"}}>
      <Text style={{top: 15, right: 30, fontFamily: "Menlo", fontSize: 20, fontWeight: "bold"}} numberOfLines={1}>Scan QR Code on Receipt</Text>
      <TouchableOpacity onPress={() => navigation.reset({index: 0,  routes: [{ name: 'Receipt' }],})} style={{ top: -15, left: 15, alignContent: "center", marginLeft: 340, width: 100, height: 30,}}><Image source={require('../assets/refresh.png')} style={{width: 40, height: 40}}/></TouchableOpacity>
    </View>
    <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </View>
  
  <View>
    <ImageBackground style={{height: 290, width: 700, right: 80,resizeMode: "contain"}}source={require('../assets/back.png')}>
      <ReceiptMessage />
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
export default ReceiptScanScreen;