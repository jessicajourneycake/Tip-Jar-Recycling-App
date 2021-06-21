import { ScrollView, View, Text, ImageBackground, Image} from 'react-native';

import React from 'react';
import Yellow0 from '../components/Yellow/Yellow0';
import Yellow1 from '../components/Yellow/Yellow1';
import Yellow2 from '../components/Yellow/Yellow2';
import Yellow3 from '../components/Yellow/Yellow3';
import Yellow4 from '../components/Yellow/Yellow4';
import Yellow5 from '../components/Yellow/Yellow5';
import Yellow6 from '../components/Yellow/Yellow6';

function YellowScreen(props) {
    return (
        <>
         <View style={{height: 70, backgroundColor: "yellow", justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "black", fontFamily: "Menlo", fontSize: 26}}>Yellow Bin: To-Go</Text>
        </View>
        <View style={{height: 180}}>
        <ImageBackground style={{width: 500, height: 210, right: 40, resizeMode: "contain"}}source={require('../assets/back.png')}>
        <Image style={{width: 130, height: 130, left: 180, top: 30, resizeMode: "contain"}} source={require('../assets/yellowqr.png')} />
        </ImageBackground>
        </View>
        <View style={{width: "100%", height: 45, backgroundColor: "lemonchiffon", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
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
            <Yellow0 />
            <Yellow1 />
            <Yellow2 />
            <Yellow3 />
            <Yellow4 />
            <Yellow5 />
            <Yellow6 />
            
        </ScrollView>
        </>
    );
}

export default YellowScreen;