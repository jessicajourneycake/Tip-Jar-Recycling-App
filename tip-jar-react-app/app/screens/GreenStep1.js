import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import Step1Message from "../components/Step1Message";


function GreenStep1({navigation}) {
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
      
        fetch('https://tipjar-updated.mybluemix.net/Green1',{
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
     
      <View style={{width: "100%", height: 90, justifyContent: "center", alignItems: "center", backgroundColor: "green"}}>
        <Text style={{fontFamily: "Menlo", fontSize: 30, fontWeight: "bold"}} numberOfLines={1}>Scan Green Bin QR Code</Text>
        
      </View>
      <View style={{height: 500}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
   
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} style={{top: 150}}/>}
    </View>
    <View style={{top: 25, height: 150, flexDirection: "row"}}>
        <View style={{top: 20, left: 40}}>
        <Step1Message />
        </View>
       
        </View>
    
        <TouchableOpacity onPress={() => navigation.navigate("Green2")} style={{left: 255,justifyContent: "center", bottom: 10, width: 300, height: 80, backgroundColor: "honeydew", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
          
                    <Text style={{fontFamily: "Menlo", fontSize: 30, alignItems: "center", justifyContent: "center", left: 90, fontWeight: "bold"}}>Step 2</Text>
                </TouchableOpacity>

           
   

    
    
  </>
    );
  }
  
  const styles = StyleSheet.create({
    
    
    container: {
    top: -20,
      width: '100%',
      height: 900,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "peachpuff"
    }
  })


export default GreenStep1;