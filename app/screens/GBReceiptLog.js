import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import GBReceipt0 from '../components/GBReceipt/GBReceipt0';
import GBReceipt1 from '../components/GBReceipt/GBReceipt1';
import GBReceipt2 from '../components/GBReceipt/GBReceipt2';
import GBReceipt3 from '../components/GBReceipt/GBReceipt3';
import GBReceipt4 from '../components/GBReceipt/GBReceipt4';
import GBReceipt5 from '../components/GBReceipt/GBReceipt5';
import GBReceipt6 from '../components/GBReceipt/GBReceipt6';
import GBReceipt7 from '../components/GBReceipt/GBReceipt7';
import GBReceipt8 from '../components/GBReceipt/GBReceipt8';
import GBReceipt9 from '../components/GBReceipt/GBReceipt9';
import Screen from "../components/Screen";





function GBReceiptLog() {
   
  

    return (
        <SafeAreaView>
<ScrollView style={{backgroundColor: "white"}}removeClippedSubviews="true">
        <View style={{height: 45, alignItems: "center",flexDirection: "row", borderBottomColor: "grey", borderBottomWidth: 1, }}>
            <Text style={{fontFamily: "Menlo", fontSize: 15, fontWeight: "bold", left: 40}}>ID</Text>
            <Text style={{fontFamily: "Menlo", fontSize: 15, fontWeight: "bold",width: 130, left: 95}}>Date/Location</Text>
            <Text style={{fontFamily: "Menlo", fontSize: 15, fontWeight: "bold", width: 130, left:140}} numberOfLines={2}>Products in Use (#)</Text>

        </View>
          <GBReceipt0 />
          <GBReceipt1 />
          <GBReceipt2 />
          <GBReceipt3 />
          <GBReceipt4 />
          <GBReceipt5 />
          <GBReceipt6 />
          <GBReceipt7 />
          <GBReceipt8 />
          <GBReceipt9 />
          
                
                
                

           
            </ScrollView>
            </SafeAreaView>
    )
};
export default GBReceiptLog;