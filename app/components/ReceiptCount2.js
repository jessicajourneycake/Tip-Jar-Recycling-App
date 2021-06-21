import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptCount2 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/receiptproduct');

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
  
                
                
            <View style={{bottom: 0, left: 139}}>
            <Text style={{fontFamily: "Menlo",width: 100, height: 75, fontSize: 26, paddingBottom: 20, paddingLeft: 10}}>{this.state.echo[0]}</Text>
           
            </View>
            
            
     
        
           

</>
               
        )
        
        
    }
       
}