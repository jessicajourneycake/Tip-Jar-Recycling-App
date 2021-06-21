import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBInUse4 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/inuse4');

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
                <View style={{paddingTop: 10, paddingBottom: 10, flexDirection: "row", borderBottomWidth: 2, borderColor: "whitesmoke"}}>
                <View>
            <Text style={{fontFamily: "Menlo", width: 110, height: 20, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{fontFamily: "Menlo", width: 90, height: 20, paddingLeft: 10}} numberOfLines={3}>{this.state.echo[4]}</Text>
            </View>
            <View>
            <Text style={{fontFamily: "Menlo", width: 120, height: 50, left: 20}} numberOfLines={2} >{this.state.echo[1]}</Text>
            </View>
            <View style={{left: 35}}>
            <Image source={{uri: this.state.echo[2]}} style={{resizeMode: "contain", height: 50, width: 50, }}/>
            </View>
            <View style={{left: 65}}>
            <Image source={{uri: this.state.echo[3]}} style={{resizeMode: "contain", height: 40, width: 40 }}/>
            </View>
           
            </View>
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}