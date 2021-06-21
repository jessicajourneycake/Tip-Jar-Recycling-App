import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBReceipt6 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/receipt6');

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
                <View style={{height: 60, paddingTop: 10, paddingBottom: 10, flexDirection: "row", borderBottomWidth: 2, borderColor: "whitesmoke"}}>
                <Text style={{fontFamily: "Menlo", fontSize: 15,left: 25,width: 80, height: 20, }}>{this.state.echo[1]}</Text> 
                <View style={{left: 0}}>
            <Text style={{fontFamily: "Menlo", fontSize: 15, width: 100, height: 20, left: 35 }} >{this.state.echo[0]}</Text>
           
            <Text style={{fontFamily: "Menlo", fontSize: 15, width: 100, height: 20, left: 35 }}>{this.state.echo[2]}</Text>
            </View>
            <Text style={{fontFamily: "Menlo", fontSize: 15, left: 140,width: 80, height: 20, }} >{this.state.echo[3]}</Text>
            </View>
 
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}