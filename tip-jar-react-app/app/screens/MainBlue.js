import { ScrollView, View, Text, ImageBackground, Image} from 'react-native';

import React from 'react';
import Blue0 from '../components/Blue/Blue0';
import Blue1 from '../components/Blue/Blue1';
import Blue2 from '../components/Blue/Blue2';
import Blue3 from '../components/Blue/Blue3';
import Blue4 from '../components/Blue/Blue4';
import Blue5 from '../components/Blue/Blue5';
import Blue6 from '../components/Blue/Blue6';




function MainBlue(props) {
    return (
        <>
         
         <View style={{width: "100%", height: 45, backgroundColor: "powderblue", alignItems: "center", paddingTop: 10, flexDirection: "row"}}>
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
            <Blue0 />
            <Blue1 />
            <Blue2 />
            <Blue3 />
            <Blue4 />
            <Blue5 />
            <Blue6 />
        </ScrollView>
        </>
    );
}

export default MainBlue;