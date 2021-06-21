import { ScrollView, View, Text, ImageBackground, Image } from 'react-native';

import React from 'react';
import Green0 from '../components/Green/Green0';
import Green1 from '../components/Green/Green1';
import Green2 from '../components/Green/Green2';
import Green3 from '../components/Green/Green3';
import Green4 from '../components/Green/Green4';
import Green5 from '../components/Green/Green5';
import Green6 from '../components/Green/Green6';
import CurbsideGreen from '../components/CurbsideGreen';


function GreenScreen(props) {
    return (
        <>
        <View style={{height: 70, backgroundColor: "forestgreen", justifyContent: "center", alignItems: "center"}}>
           <Text style={{color: "black", fontFamily: "Menlo", fontSize: 26}}>Green Bin: P&G</Text>
       </View>
       <View>
        <ImageBackground style={{width: 500, height: 230, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/greenqr.png')} />
        <CurbsideGreen />
        </ImageBackground>
        </View>
        <View style={{width: "100%", height: 45, backgroundColor: "honeydew", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
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
           <Green0 />
           <Green1 />
           <Green2 />
           <Green3 />
           <Green4 />
           <Green5 />
           <Green6 />
            
        </ScrollView>
        </>
    );
}

export default GreenScreen;