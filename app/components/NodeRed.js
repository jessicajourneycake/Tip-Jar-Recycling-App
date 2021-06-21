import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class NodeRed extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ["",""]
           
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjj.mybluemix.net/ws/flatlist');

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
            console.log(data);

            

            this.setState({echo: data.split(',,,')});


            setTimeout(() => {
                socket.send(new Date().toGMTString());
            }, 3000);
        }
    }

   
    render() {
      
        return (
            
    <FlatList data={ this.state.echo} keyExtractor={this._keyExtractor} renderItem={({item}) =>  
    <>
    <Text>Product Name: {this.state.echo}</Text>
    
   
    
   </>}
    />
           

        )  
    }
}