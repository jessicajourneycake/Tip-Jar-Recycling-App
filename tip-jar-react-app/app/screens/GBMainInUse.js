import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GBInUse0 from '../components/GBInUse/GBInUse0';
import GBInUse1 from '../components/GBInUse/GBInUse1';
import GBInUse10 from '../components/GBInUse/GBInUse10';
import GBInUse11 from '../components/GBInUse/GBInUse11';
import GBInUse2 from '../components/GBInUse/GBInUse2';
import GBInUse3 from '../components/GBInUse/GBInUse3';
import GBInUse4 from '../components/GBInUse/GBInUse4';
import GBInUse5 from '../components/GBInUse/GBInUse5';
import GBInUse6 from '../components/GBInUse/GBInUse6';
import GBInUse7 from '../components/GBInUse/GBInUse7';
import GBInUse8 from '../components/GBInUse/GBInUse8';
import GBInUse9 from '../components/GBInUse/GBInUse9';



function GBMainInUse(props) {
    return (
        <>
        <View>
        <View style={{width: "100%", height: 50, backgroundColor: "peachpuff", alignItems: "center", flexDirection: "row"}}>
            <View style={{width: 120,borderRightWidth: 2, paddingRight: 5}}>
        <Text style={{fontSize: 15, paddingLeft: 10, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Date/Receipt ID</Text>
        </View>
        <View style={{width: 190,borderRightWidth: 2, paddingRight: 5, left: 15}}>
        <Text style={{fontSize: 15, top: 5, height: 40, fontFamily: "Menlo", fontWeight: '600', }} numberOfLines={2}>Product</Text>
        </View>
        <View style={{width: 90, height: 60}}>
        <Text style={{left: 2, fontSize: 15, left: 30, top: 10, right: 7, height: 60, fontFamily: "Menlo", fontWeight: '600',}} numberOfLines={2}>Golden Bin</Text>
        </View>
        </View>
        </View>

<ScrollView>
<GBInUse0 />
<GBInUse1 />
<GBInUse2 />
<GBInUse3 />
<GBInUse4 />
<GBInUse5 />
<GBInUse6 />
<GBInUse7 />
<GBInUse8 />
<GBInUse9 />
<GBInUse10 />
<GBInUse11 />


</ScrollView>
</>
    );
}

export default GBMainInUse;