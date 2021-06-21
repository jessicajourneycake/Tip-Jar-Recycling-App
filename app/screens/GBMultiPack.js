import { View, Text, ScrollView } from 'react-native';


import React from 'react';
import GBMultiInUse1 from '../components/Multipack/GBMultiInUse1';
import GBMultiInUse0 from '../components/Multipack/GBMultiInUse0';
import GBMultiInUse2 from '../components/Multipack/GBMultiInUse2';
import GBMultiInUse3 from '../components/Multipack/GBMultiInUse3';
import GBMultiInUse4 from '../components/Multipack/GBMultiInUse4';

function GBMultiPack(props) {
    return (
        <>
         <View>
        <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", flexDirection: "row"}}>
            <View style={{width: 110,borderRightWidth: 2, }}>
        <Text style={{fontSize: 15, paddingLeft: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Date/Receipt ID</Text>
        </View>
        <View style={{width: 170,borderRightWidth: 2, left: 10}}>
        <Text style={{fontSize: 15, top: 5, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Product</Text>
        </View>
        <View style={{width: 60, borderRightWidth: 2, }}>
        <Text style={{left: 2, fontSize: 15, left: 15, top: 10, right: 7, height: 40, fontFamily: "Menlo", fontWeight: '600',}} numberOfLines={2}>Qty.</Text>
        </View>
        <View style={{width: 60, height: 60}}>
        <Text style={{fontSize: 15, left: 10, top: 10, right: 7, height: 60, fontFamily: "Menlo", fontWeight: '600',}} numberOfLines={2}>Golden Bin</Text>
        </View>
        </View>
        </View>
        <ScrollView style={{height: 60}}>
        <GBMultiInUse0 />
        <GBMultiInUse1 />
        <GBMultiInUse2 />
        <GBMultiInUse3 />
        <GBMultiInUse4 />

        </ScrollView>
        <View style={{height: 60, width: "100%"}} />
        
        
            </>
    );
}

export default GBMultiPack;