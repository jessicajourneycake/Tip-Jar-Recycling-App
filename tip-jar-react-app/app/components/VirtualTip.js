import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class VirtualTip extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ''
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/virtualtip');

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
                <Text>{this.state.echo}</Text>
                </>
    
               
        )
        
        
    }
       
}