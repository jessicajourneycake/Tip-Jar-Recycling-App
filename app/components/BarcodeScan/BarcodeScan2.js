import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';
import GBBarcodeMessage from './GBBarcodeMessage';



export default class BarcodeScan2 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/barcodescan1');

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
            console.log({data});

            this.setState({echo: data.split(',')});
            setTimeout(() => {
                socket.send(new Date().toGMTString());
            }, 3000);
           
        }
    }
   
   
  

    render() {
       
        return (

           
            <>
            <SafeAreaView>
                <View>
                    <View style={{flexDirection: "row"}}> 
                        <View style={{left: 20, top: 5  }} numberOfLines={2}>
                            <Text style={{marginTop: 15, fontFamily: "Menlo", fontSize: 18, fontWeight: "bold"}}>Instructions</Text>
                            <Text style={{width: 220, height: 50, paddingLeft: 0}} numberOfLines={2}>{this.state.echo[2]}</Text>
                        </View>
                        <View style={{top: 10,left: 80}}>
                        <Image source={{uri: this.state.echo[3]}} style={{resizeMode: "contain", height: 60, width: 60, marginTop: 15}}/>   
                        </View>
                    </View>
                    <View style={{top: 60,flexDirection: "row"}}>
                   
                        <View style={{bottom: -90, left: 0}}>
                            <Image source={{uri: this.state.echo[1]}} style={{resizeMode: "contain", height: 70, width: 70, left: 30, top: -100}}/>
                        </View>
                        <View style={{bottom: 20, left: 60}}>
                            <Text style={{fontFamily: "Menlo", fontSize: 18, fontWeight: "bold", paddingBottom: 10}}>Tip Earned</Text>  
                            <Text style={{fontSize: 24, fontFamily: "Menlo",width: 320, height: 24 }} >${this.state.echo[0]}</Text>
                        
                        </View> 

                    </View>
                </View>
   
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}