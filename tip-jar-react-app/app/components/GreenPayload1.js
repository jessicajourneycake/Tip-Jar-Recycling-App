import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GreenPayload1 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/greenstep1');

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
                <View style={{top: -80, left: 10}}>
            <Text style={{fontFamily: "Menlo", fontSize: 30, width: 200, height: 70, paddingLeft: 10}} numberOfLines={2}>{this.state.echo[0]}</Text>
            </View>
            <View style={{top: -80, right: -250 }}>
            <Text style={{fontFamily: "Menlo", fontSize: 30, width: 200, height: 70, paddingLeft: 10}} numberOfLines={2}>${this.state.echo[1]}</Text>
            </View>
            
            
           </View>
        
           

</>
               
        )
        
        
    }
       
}