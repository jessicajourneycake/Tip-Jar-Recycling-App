import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class GBVirtualTip extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ''
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/virtualtip');

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
            console.log({data});

            this.setState({echo: data});
            setTimeout(() => {
                socket.send(new Date().toGMTString());
            }, 3000);
        }
    }
   


    render() {
        return (
            <>
                <Text style={{bottom: 5, fontFamily: "Menlo", fontSize: 50}}>${this.state.echo}</Text>
                </>
    
               
        )
        
        
    }
       
}