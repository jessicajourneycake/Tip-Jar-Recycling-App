import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from '../components/AppButton';


function ViewImageScreen(props) {
    return (
        <>
        <View style={styles.view}>
        <ImageBackground
        resizeMode="contain"
        style={styles.images} 
        source={require('../assets/back.png')}
        />
         <Image source={require('../assets/logo.png')} style={styles.logo}/> 
        </View>
        <View style={styles.buttonView}>
        <View style={styles.buttonColor}>
        <AppButton title="Login" style={styles.loginButton}/>
        </View>
        </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 20,
        left: 30,
    },
    buttonColor: {
        height: 60,
        width: 300,
        marginLeft: 70,
        marginTop: 20,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "white"
    },
    buttonView: {
        backgroundColor: "cornflowerblue",
        height: 200,
        width: '100%'
    },
    container: {
       
    },
    deleteIcon: {
        position: "absolute",
        top: 20,
        right: 30,
    },
    images: {
        flex: 1,
        marginTop: -400,
        width: 450,
        height: 1500,
        opacity: 0.8,
        justifyContent: 'center',
        resizeMode: 'stretch',
        position: "absolute"
    },
    loginButton: {
        height: 60, 
        width: '100%',
        backgroundColor: "#6495ed",
    },
    logo: {
        height: 210,
        width: 150,
        marginTop: 250,
        marginLeft: 145,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        opacity: 0.92
    },
    view: {
        flex: 2,
        alignContent: 'center',
        overflow: 'hidden',
        marginTop: 30,
        resizeMode: 'stretch'
    }

})

export default ViewImageScreen;