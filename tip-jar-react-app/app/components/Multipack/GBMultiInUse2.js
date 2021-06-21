import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBMultiInUse2 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/multiinuse2');

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
  
                
                <View style={{height: 60, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "whitesmoke" }}>
                <View style={{top: 5}}>
            <Text style={{fontFamily: "Menlo", width: 100, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{fontFamily: "Menlo", width: 100, paddingLeft: 10}} >{this.state.echo[3]}</Text>
            </View>
            <View style={{left: 15, top: 5}}>
            <Text style={{fontFamily: "Menlo",width: 110, height: 40,}} numberOfLines={2}>{this.state.echo[1]}</Text>
            </View>
            <View style={{left: 30, top: 5}}>
            <Image source={{uri: this.state.echo[2]}} style={{height: 40, width: 40}}/>
            </View>
            <View style={{left: 58, top: 10}}>
            <Text style={{fontWeight: "bold", fontFamily: "Menlo",width: 70, height: 40,}}>{this.state.echo[4]}</Text>
            </View>
            <View style={{top: 10, left: 40}}>
            <Image source={{uri: this.state.echo[5]}} style={{height: 30, width: 30}}/>
            </View>
            
           </View>
        
           

</>
               
        )
        
        
    }
       
}