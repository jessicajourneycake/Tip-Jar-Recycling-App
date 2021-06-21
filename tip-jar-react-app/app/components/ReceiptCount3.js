import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptCount3 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/gbmultireceiptproduct');

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
  
                
                
                <View style={{bottom: 40, left: 140}}>
            <Text style={{fontFamily: "Menlo",width: 100, height: 50, fontSize: 26, paddingBottom: 10, paddingLeft: 10}}>{this.state.echo[0]}</Text>
           
            </View>
            
            
          
        
           

</>
               
        )
        
        
    }
       
}