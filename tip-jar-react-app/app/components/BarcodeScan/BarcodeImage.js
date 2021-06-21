import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';



export default class BarcodeImage extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/barcodeimage');

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
        
                    
                   
                            <Image source={{uri: this.state.echo[0]}} style={{resizeMode: "contain", height: 60, width: 60, marginTop: 15}}/>   
    
                   
   
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}