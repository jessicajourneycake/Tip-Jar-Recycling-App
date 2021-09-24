import React from 'react';
import {Image, View, Text, StyleSheet, ImageBackground, Button, SafeAreaView, TouchableOpacity } from 'react-native';



function WelcomeScreen({navigation}) {
    return (
            <SafeAreaView>
                <ImageBackground source={require('../assets/fullback.png')} style={{width: '100%', height: 800, opacity: 0.90}}>
            <View style={styles.LogoContainer}>
            <Image source={require('../assets/logo.png')} style={{width: 90, height: 150, alignItems: "center"}} />
                
            </View>
                <View style={{justifyContent: "flex-end", top: -150, alignItems: "center", right: 40}}>
                
               
                <TouchableOpacity onPress={() => navigation.navigate("Gold")} style={{marginTop: 340, marginLeft: 80, width: 260, height: 60, backgroundColor: "lightsteelblue", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 18, marginLeft: 70, marginTop: 17, fontWeight: "bold"}}>Guest User</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Admin")} style={{marginTop: 30, marginLeft: 80, width: 260, height: 60, backgroundColor: "lightsteelblue", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", fontSize: 18, marginLeft: 40, marginTop: 17, fontWeight: "bold"}}>Golden Bin Admin</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map")} style={{marginTop: 30, marginLeft: 80, width: 260, height: 60, backgroundColor: "lightsteelblue", borderWidth: 1, borderRadius: 15, borderColor: "white" }}><Text style={{fontFamily: "Menlo", marginLeft: 22, fontSize: 18, marginTop: 17, fontWeight: "bold"}}>Golden Bin Locations</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    background: {
        margin: 5,
        backgroundColor: "white"
        
    },
    buttonContainer: {
        padding: 20, 
        width: "100%",
    },
    
    logo: {
        width: 40,
        height: "100%",
       
    },
    LogoContainer: {
        justifyContent: "flex-start",
        top: 160,

       
        alignItems: "center",
    },
  
    

})

export default WelcomeScreen;