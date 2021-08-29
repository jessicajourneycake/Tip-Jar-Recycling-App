import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

function SelectColor({navigation}) {
    return (
    <View>
        <View style={{alignItems: "center", justifyContent: "center", top: 20, height: 50}}><Text style={{fontSize: 30, fontFamily: "Menlo", fontWeight: "bold"}}>Select Golden Bin</Text></View>
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <TouchableOpacity onPress={() => navigation.navigate("Green1")} style={{justifyContent: "center", marginTop: 40,  width: 230, height: 60, backgroundColor: "green", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 60, fontWeight: "bold"}}>Green: P&G</Text>
                </TouchableOpacity>
               
            </View>
       </View>
    );
}

export default SelectColor;