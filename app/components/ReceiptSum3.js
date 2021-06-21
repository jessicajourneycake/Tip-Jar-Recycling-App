import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptSum3 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/gbmultireceiptsum');

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
  
                
                
              
                    
            <Text style={{fontFamily: "Menlo", fontSize: 30, width: 160, height: 50, alignItems: "center", justfiyContent: "center", bottom: 275, left: 330 }}>${this.state.echo[0]}</Text>
           
          
            
            
     
        
           

</>
               
        )
        
        
    }
}
