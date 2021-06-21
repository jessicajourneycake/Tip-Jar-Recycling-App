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
import InUse11 from '../components/InUse/InUse11';


const undefined = () => {
    return undefined!== undefined;
}


function MainInUse({navigation}) {

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
<InUse0 />
<InUse1 />
<InUse2 />
<InUse3 />
<InUse4 />
<InUse5 />
<InUse6/>
<InUse7 />
<InUse8 />
<InUse9 />
<InUse10 />
<InUse11 />

</ScrollView>
</>
    );
}

export default MainInUse;