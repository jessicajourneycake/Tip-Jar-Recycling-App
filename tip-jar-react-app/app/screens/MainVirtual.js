import { View, Text, ScrollView } from 'react-native';
import Virtual0 from '../components/Virtual/Virtual0';
import Virtual1 from '../components/Virtual/Virtual1';
import Virtual10 from '../components/Virtual/Virtual10';
import Virtual11 from '../components/Virtual/Virtual11';
import Virtual2 from '../components/Virtual/Virtual2';
import Virtual3 from '../components/Virtual/Virtual3';
import Virtual4 from '../components/Virtual/Virtual4';
import Virtual5 from '../components/Virtual/Virtual5';
import Virtual6 from '../components/Virtual/Virtual6';
import Virtual7 from '../components/Virtual/Virtual7';
import Virtual8 from '../components/Virtual/Virtual8';
import Virtual9 from '../components/Virtual/Virtual9';

import React from 'react';

function MainVirtual(props) {
    return (
        <>
        <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", paddingTop: 5, flexDirection: "row"}}>
        <Text style={{fontSize: 16, paddingLeft: 15, height: 30, fontFamily: "Menlo", fontWeight: '600'}}>Product</Text>
        <Text style={{marginLeft: 275, fontSize: 16, right: 7, height: 30, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>

        </View>
<ScrollView style={{backgroundColor: "white"}}removeClippedSubviews="true">
    <Virtual0 />
    <Virtual1 />
    <Virtual2 />
    <Virtual3 />
    <Virtual4 />
    <Virtual5 />
    <Virtual6 />
    <Virtual7 />
    <Virtual8 />
    <Virtual9 />
    <Virtual10 />
    <Virtual11 />
    
    


</ScrollView>
</>
    );
}

export default MainVirtual;