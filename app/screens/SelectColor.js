import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

function SelectColor({navigation}) {
    return (
    <View>
        <View style={{alignItems: "center", justifyContent: "center", top: 20, height: 50}}><Text style={{fontSize: 30, fontFamily: "Menlo", fontWeight: "bold"}}>Select Golden Bin</Text></View>
            <View style={{justifyContent: "center", alignItems: "center",}}>
                <TouchableOpacity onPress={() => navigation.navigate("Orange Scan")} style={{justifyContent: "center", marginTop: 40,  width: 230, height: 60, backgroundColor: "orange", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 30, fontWeight: "bold"}}>Orange: Unilever</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Red Scan")} style={{justifyContent: "center", marginTop: 30,  width: 230, height: 60, backgroundColor: "red", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 30, fontWeight: "bold"}}>Red: Kraft Heinz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Purple Scan")} style={{justifyContent: "center", marginTop: 30,  width: 230, height: 60, backgroundColor: "purple", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 35, fontWeight: "bold", color: "white"}}>Purple: Nestle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Blue Scan")} style={{justifyContent: "center", marginTop: 30,  width: 230, height: 60, backgroundColor: "blue", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 35, fontWeight: "bold", color: "white"}}>Blue: Coca Cola</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Yellow Scan")} style={{justifyContent: "center", marginTop: 30,  width: 230, height: 60, backgroundColor: "yellow", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 45, fontWeight: "bold"}}>Yellow: To-Go</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Green Scan")} style={{justifyContent: "center", marginTop: 30,  width: 230, height: 60, backgroundColor: "green", borderWidth: 1, borderRadius: 15, borderColor: "white" }}>
                    <Text style={{fontFamily: "Menlo", fontSize: 18, alignItems: "center", justifyContent: "center", left: 60, fontWeight: "bold", color: "white"}}>Green: P&G</Text>
                </TouchableOpacity>
            </View>
       </View>
    );
}

export default SelectColor;