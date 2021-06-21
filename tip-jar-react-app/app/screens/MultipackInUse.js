import React from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';
import Screen from "../components/Screen";
import InUse0 from "../components/InUse/InUse0";
import InUse1 from "../components/InUse/InUse1";
import InUse2 from '../components/InUse/InUse2';
import InUse3 from '../components/InUse/InUse3';
import InUse4 from '../components/InUse/InUse4';
import InUse5 from '../components/InUse/InUse5';
import InUse6 from '../components/InUse/InUse6';
import InUse7 from '../components/InUse/InUse7';
import InUse8 from '../components/InUse/InUse8';
import InUse9 from '../components/InUse/InUse9';
import InUse10 from '../components/InUse/InUse10';
import MultiInUse1 from '../components/Multipack/MultiInUse1';
import MultiInUse0 from '../components/Multipack/MultiInUse0';
import MultiInUse2 from '../components/Multipack/MultiInUse2';
import MultiInUse3 from '../components/Multipack/MultiInUse3';
import MultiInUse4 from '../components/Multipack/MultiInUse4';


const undefined = () => {
    return undefined!== undefined;
}


function MultipackInUse({navigation}) {

    return (

<>
<View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", paddingTop: 5, flexDirection: "row"}}>
<Text style={{fontSize: 16, paddingLeft: 15, height: 30, fontFamily: "Menlo", fontWeight: '600'}}>Product</Text>
<Text style={{marginLeft: 275, fontSize: 16, right: 7, height: 30, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>

</View>

<ScrollView>
<MultiInUse0 />
<MultiInUse1 />
<MultiInUse2 />
<MultiInUse3 />
<MultiInUse4 />


</ScrollView>
</>
    );
}

export default MultipackInUse;