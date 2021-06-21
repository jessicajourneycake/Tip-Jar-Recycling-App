import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Button, Text } from 'react-native';



    
function CurbsidePurple(props) {
    const [scanned, setScanned] = useState(false);

    const curbBlue = () => {
        let data = 'Hello';
        setScanned(true);
        console.log({data});
        
          fetch('https://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/curbsidepurple',{
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
          return response.json()
          }).catch(error => console.log(error));
        
      };

    return (
        <TouchableOpacity onPress={curbBlue} style={{left: 155, top: 30, height: 40, width: 200, borderRadius: 15, backgroundColor: "purple"}}>
            <Text style={{left: 15, top: 9, fontFamily: "Menlo", fontSize: 20, fontWeight: "bold", color: "white"}}>Going Curbside</Text>
        </TouchableOpacity>
        
        
    );
}

export default CurbsidePurple;
