import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class BarcodeMessage extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/singlebarcodemessage');

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
                
                <View style={{bottom: 120, left: 10}}>
            <Text style={{fontSize: 18, fontFamily: "Menlo", width: 175, top: 10, paddingLeft: 10, fontWeight: "bold"}} numberOfLines={3} >{this.state.echo[0]}</Text>
            </View>
   
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}