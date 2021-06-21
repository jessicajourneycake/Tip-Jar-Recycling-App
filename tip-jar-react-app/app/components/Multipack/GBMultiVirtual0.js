import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBMultiVirtual0 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/multivirtual0');

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
            <Text style={{fontFamily: "Menlo", width: 95, height: 20, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{fontFamily: "Menlo", width: 95, height: 20, paddingLeft: 10}} >{this.state.echo[3]}</Text>
            </View>
            <View style={{left: 20}}>
            <Text style={{fontFamily: "Menlo",width: 120}} numberOfLines={2}>{this.state.echo[1]}</Text>
            </View>
            <View style={{left: 30}}>
            <Image source={{uri: this.state.echo[2]}} style={{height: 45, width: 45}}/>
            </View>
            <View style={{left: 60}}>
            <Text style={{fontFamuly: "Menlo", fontWeight: "bold",width: 70, height: 20,}}>{this.state.echo[4]}</Text>
            </View>
            <View style={{left: 35}}>
            <Text style={{width: 70, height: 20, fontFamily: "Menlo", fontWeight: "bold"}}>{this.state.echo[5]}</Text>
            </View>
            
           </View>
        
           

</>
               
        )
        
        
    }
       
}