import { View, Text, ScrollView } from 'react-native';


import React from 'react';
import GBMultiVirtual0 from '../components/Multipack/GBMultiVirtual0';
import GBMultiVirtual1 from '../components/Multipack/GBMultiVirtual1';
import GBMultiVirtual2 from '../components/Multipack/GBMultiVirtual2';
import MultiVirtual0 from '../components/Multipack/MultiVirtual0';
import MultiVirtual1 from '../components/Multipack/MultiVirtual1';
import MultiVirtual3 from '../components/Multipack/MultiVirtual3';
import MultiVirtual4 from '../components/Multipack/MultiVirtual4';
import MultiVirtual2 from '../components/Multipack/MultiVirtual2';


function MultiVirtualBin(props) {
    return (
        <>
         <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 85, fontSize: 16, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Receipt ID</Text>
                    </View>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 250, fontSize: 16, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Product</Text>
                    </View>
                    <Text style={{marginLeft: 20, fontSize: 16, right: 7, height: 32, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>

                    </View>
        <ScrollView style={{height: 60}}>
        <MultiVirtual0 />
        <MultiVirtual1 />
        <MultiVirtual2 />
        <MultiVirtual3 />
        <MultiVirtual4 />


        </ScrollView>
       
        
        
            </>
    );
}

export default MultiVirtualBin;