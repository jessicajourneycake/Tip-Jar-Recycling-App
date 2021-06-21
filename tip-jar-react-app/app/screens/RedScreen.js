import { ScrollView, View, Text, ImageBackground, Image } from 'react-native';

import React from 'react';
import Red0 from '../components/Red/Red0';
import Red1 from '../components/Red/Red1';
import Red2 from '../components/Red/Red2';
import Red3 from '../components/Red/Red3';
import Red4 from '../components/Red/Red4';
import Red5 from '../components/Red/Red5';
import Red6 from '../components/Red/Red6';
import CurbsideRed from '../components/CurbsideRed';

function RedScreen(props) {
    return (
        <>
         <View style={{height: 70, backgroundColor: "crimson", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white", fontFamily: "Menlo", fontSize: 26}}>Red Bin: Kraft Heinz</Text>
        </View>
      
        <View>
        <ImageBackground style={{width: 500, height: 230, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/redqr.png')} />
        <CurbsideRed />
        </ImageBackground>
        </View>
      
        <View style={{width: "100%", height: 45, backgroundColor: "mistyrose", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 105, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Date/Receipt ID</Text>
                    </View>
                    <View style={{borderRightWidth: 2, height: 40, top: -5 }}>
                    <Text style={{width: 230, fontSize: 14, paddingLeft: 10, height: 50, top: 3, fontFamily: "Menlo", fontWeight: '600'}} numberOfLines={2}>Product</Text>
                    </View>
                    <View>
                    <Text style={{top: -5, marginLeft: 15, fontSize: 14, right: 7, height: 32, fontFamily: "Menlo", fontWeight: '600' }}>Tip $</Text>
                    </View>
                    </View>
        <ScrollView>
            <Red0 />
            <Red1 />
            <Red2 />
            <Red3 />
            <Red4 />
            <Red5 />
            <Red6 />
        </ScrollView>
        </>
    );
}

export default RedScreen;