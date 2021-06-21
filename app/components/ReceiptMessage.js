import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptMessage extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/receiptmessage');

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
  
                
                <View style={{left: 30, top: 20, paddingTop: 5, paddingBottom: 10, flexDirection: "row", }}>
                <View>
            <Text style={{fontFamily: "Menlo", fontSize: 16, width: 200, height: 70, paddingLeft: 10}} numberOfLines={2}>{this.state.echo[0]}</Text>
           
            </View>
            
            
           </View>
        
           

</>
               
        )
        
        
    }
       
}