import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class OrangePayload2 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/orangestep2');

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
  
  <View style={{left: 15, top: 20, paddingTop: 5, paddingBottom: 10, flexDirection: "row"}}>
                <View style={{top: -120, left: 20}}>
                    <Text style={{fontFamily: "Menlo", fontSize: 30, fontWeight: "bold"}}>One Item Check</Text>
                <Image source={{uri: this.state.echo[0]}} style={{resizeMode: "contain", top: 10, height: 60, width: 60 }}/>
            </View>
            <View style={{top: -120, left: 250 }}>
            <Text style={{fontFamily: "Menlo", fontSize: 30, fontWeight: "bold"}}>Tip</Text>
            <Text style={{fontFamily: "Menlo", fontSize: 30, width: 200, height: 70, paddingTop: 20}} numberOfLines={2}>${this.state.echo[1]}</Text>
            </View>
            
            
           </View>
        
           

</>
        
           


               
        )
        
        
    }
       
}