import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBMultiVirtual3 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/multivirtual3');

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
  
                
                <View style={{paddingTop: 10, paddingBottom: 10, flexDirection: "row", borderBottomWidth: 1, borderColor: "whitesmoke"}}>
                <View>
            <Text style={{width: 280, height: 20, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{width: 280, height: 20, paddingLeft: 10}} numberOfLines={3}>{this.state.echo[1]}</Text>
            </View>
            <View>
            <Image source={{uri: this.state.echo[2]}} style={{height: 50, width: 50}}/>
            </View>
            <View style={{justifyContent: "center"}}>
            <Text style={{width: 70, height: 20, paddingLeft: 30, color: "blue"}} numberOfLines={3}>{this.state.echo[3]}</Text>
            </View>
            
           </View>
        
           

</>
               
        )
        
        
    }
       
}