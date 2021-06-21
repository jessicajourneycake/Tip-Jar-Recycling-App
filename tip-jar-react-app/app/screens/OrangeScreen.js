import { ScrollView, View, Text, ImageBackground, Image } from 'react-native';

import React from 'react';
import Orange0 from '../components/Orange/Orange0';
import Orange1 from '../components/Orange/Orange1';
import Orange2 from '../components/Orange/Orange2';
import Orange3 from '../components/Orange/Orange3';
import Orange4 from '../components/Orange/Orange4';
import Orange5 from '../components/Orange/Orange5';
import Orange6 from '../components/Orange/Orange6';
import CurbsideOrange from '../components/CurbsideOrange';



function OrangeScreen(props) {
    return (
        <>
        <View style={{height: 70, backgroundColor: "orange", justifyContent: "center", alignItems: "center"}}>
           <Text style={{color: "black", fontFamily: "Menlo", fontSize: 26}}>Orange Bin: Unilever</Text>

       </View>
       <View>
        <ImageBackground style={{width: 500, height: 230, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/orangeqr.png')} />
        <CurbsideOrange />
        </ImageBackground>
        </View>
        <View style={{width: "100%", height: 45, backgroundColor: "papayawhip", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
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
           <Orange0 />
           <Orange1 />
           <Orange2 />
           <Orange3 />
           <Orange4 />
           <Orange5 />
           <Orange6 />

        </ScrollView>
        </>
    );
}

export default OrangeScreen;