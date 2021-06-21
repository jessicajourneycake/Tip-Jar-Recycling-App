import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class ReceiptSum4 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','', '', '']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/multireceiptsum');

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
  
                
                
              
                    
            <Text style={{fontFamily: "Menlo", fontSize: 30, width: 160, height: 50, alignItems: "center", justfiyContent: "center", bottom: 230, left: 330 }}>${this.state.echo[0]}</Text>
           
          
            
            
     
        
           

</>
               
        )
        
        
    }
}
