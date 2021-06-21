import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptCount4 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/multireceiptproduct');

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