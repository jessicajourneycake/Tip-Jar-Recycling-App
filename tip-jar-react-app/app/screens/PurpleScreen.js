import { ScrollView, View, Text, ImageBackground, Image } from 'react-native';

import React from 'react';
import Purple0 from '../components/Purple/Purple0';
import Purple1 from '../components/Purple/Purple1';
import Purple2 from '../components/Purple/Purple2';
import Purple3 from '../components/Purple/Purple3';
import Purple4 from '../components/Purple/Purple4';
import Purple5 from '../components/Purple/Purple5';
import Purple6 from '../components/Purple/Purple6';
import CurbsidePurple from '../components/CurbsidePurple';


function PurpleScreen(props) {
    return (
        <>
        <View style={{height: 60, backgroundColor: "purple", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "white", fontFamily: "Menlo", fontSize: 26}}>Purple Bin: Nestle</Text>
        </View>
        <View>
        <ImageBackground style={{width: 500, height: 230, right: 50, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 190, top: 20, resizeMode: "contain"}} source={require('../assets/purpleqr.png')} />
        <CurbsidePurple />
        </ImageBackground>
        </View>
        <View style={{width: "100%", height: 45, backgroundColor: "lavender", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
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
            <Purple0 />
            <Purple1 />
            <Purple2 />
            <Purple3 />
            <Purple4 />
            <Purple5 />
            <Purple6 />

        </ScrollView>
        </>
    );
}

export default PurpleScreen;