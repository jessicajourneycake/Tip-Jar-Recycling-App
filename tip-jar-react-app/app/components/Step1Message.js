import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class Step1Message extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('https://tipjar-updated.mybluemix.net/ws/green1');

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
            console.log({data});

            this.setState({echo: data.split(',,')});
            setTimeout(() => {
                socket.send(new Date().toGMTString());
            }, 3000);
           
        }
    }
   
   
  

    render() {
       
        return (

           
            <>
         
            <View>
            <Text style={{fontFamily: "Menlo", width: 650, height: 30, left: 50, top: 20, fontSize: 16}}>{this.state.echo[0]}</Text>
            </View>
            
           
    

</>
            

                
    
               
        )
        
        
    }
       
}