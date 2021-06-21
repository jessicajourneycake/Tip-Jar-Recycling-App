import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Screen from "../components/Screen";
import Receipt0 from '../components/Receipt/Receipt0';
import Receipt1 from '../components/Receipt/Receipt1';
import Receipt2 from '../components/Receipt/Receipt2';
import Receipt3 from '../components/Receipt/Receipt3';
import Receipt4 from '../components/Receipt/Receipt4';
import Receipt5 from '../components/Receipt/Receipt5';
import Receipt6 from '../components/Receipt/Receipt6';
import Receipt7 from '../components/Receipt/Receipt7';
import Receipt8 from '../components/Receipt/Receipt8';
import Receipt9 from '../components/Receipt/Receipt9';




function ReceiptLog() {
   
  

    return (
        <SafeAreaView>
<ScrollView style={{backgroundColor: "white"}}removeClippedSubviews="true">
                <Receipt0 />
                <Receipt1 />
                <Receipt2 />
                <Receipt3 />
                <Receipt4 />
                <Receipt5 />
                <Receipt6 />
                <Receipt7 />
                <Receipt8 />
                <Receipt9 />
                
                
                

           
            </ScrollView>
            </SafeAreaView>
    )
};
export default ReceiptLog;