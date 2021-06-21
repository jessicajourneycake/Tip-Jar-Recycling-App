import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ScrollView } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import OrangePayload2 from "../components/OrangePayload2";

function OrangeStep2(props) {
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
      
        fetch('https://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/orangebarcode',{
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
     
     <View style={{top: -10, width: "100%", height: 90, justifyContent: "center", alignItems: "center", backgroundColor: "orange"}}>
        <Text style={{fontFamily: "Menlo", fontSize: 30, fontWeight: "bold"}} numberOfLines={1}>One Item Check: Scan Barcode</Text>
        
      </View>
      <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        type="front"
       
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    <View style={{top: 120, height: 200, flexDirection: "row"}}>
     
    <OrangePayload2 />
       
    </View>
    
    
  </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    top: -20,
      width: '100%',
      height: 500,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "peachpuff"
    }
  })

export default OrangeStep2;