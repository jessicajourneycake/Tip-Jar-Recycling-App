import React from 'react';
import { View, StyleSheet, FlatList, Image, ImageBackground, Button } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import MessagesScreen from './ProductsInUse';
import BarcodeScreen from '../screens/BarcodeScreen';
import VirtualBinScreen from './TipJarScreen';



function AccountScreen({navigation}) {
    return (
        <>
        
       <Screen style={{backgroundColor: "white"}}>
           <View style={styles.logo}>
                
                <Image source={require('../assets/logo.png')} style={{width: 110, height: 184, marginLeft: 140}} />
            </View>
            
            <View style={styles.container}>
            <View style={{justifyContent: 'center', height: 70, width: 300, borderColor: "white", borderRadius: 10, borderWidth: 2}}>
            <Button style={{width: "100%", height: 70}}title="Virtual Bin Scan" onPress={() => navigation.navigate("Barcode")} />
            </View>
            <Button style={{width: "100%", height: 100}}title="Products in Use" onPress={() => navigation.navigate("Messages")} />
            <Button style={{width: "100%", height: 100}}title="Virtual Bin" onPress={() => navigation.navigate("Virtual")} />
                        
            </View>
            </Screen>
            </>
      
    );
}

const styles = StyleSheet.create({
   
    container: {
        padding: 70,
        marginVertical: 20,
        height: 433,
        width: "100%",        
        backgroundColor: "cornflowerblue",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
   list: {
       margin: 0,
       padding: -50
       
       
   },
   logo: {
       flexDirection: "row"
   },
   flat: {
       margin: -30,
       marginVertical: -10
   },
   logo: {
        backgroundColor: "white",
        paddingTop: 10,
        margin: 10

    },
    

   
})

export default AccountScreen;