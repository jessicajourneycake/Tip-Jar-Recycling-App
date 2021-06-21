import { View, Text, ScrollView } from 'react-native';


import React from 'react';
import GBMultiVirtual0 from '../components/Multipack/GBMultiVirtual0';
import GBMultiVirtual1 from '../components/Multipack/GBMultiVirtual1';
import GBMultiVirtual2 from '../components/Multipack/GBMultiVirtual2';


function GBMultiVirtual(props) {
    return (
        <>
            <View style={{width: "100%", height: 45, backgroundColor: "powderblue", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 105, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Date/Receipt ID</Text>
                    </View>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 190, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Product</Text>
                    </View>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 50, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}}>Qty</Text>
                    </View>
                    <View>
                    <Text style={{top: -5, marginLeft: 15, fontSize: 14, right: 7, height: 32, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>
                    </View>
                    </View>
        <ScrollView style={{height: 60}}>
        <GBMultiVirtual0/>
        <GBMultiVirtual1/>
        <GBMultiVirtual2/>

        </ScrollView>
       
        
        
            </>
    );
}

export default GBMultiVirtual;