import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class MultiInUse2 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/multiinuse2');

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
                <Text style={{width: 80, height: 20, paddingLeft: 10}} numberOfLines={3}>{this.state.echo[4]}</Text>
                <View>
            <Text style={{width: 200, height: 20, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{width: 200, height: 20, paddingLeft: 10}} numberOfLines={3}>{this.state.echo[1]}</Text>
            </View>
            <View style={{paddingLeft: 20}}>
            <Image source={{uri: this.state.echo[3]}} style={{resizeMode: "contain", height: 50, width: 50 }}/>
            </View>
            <Text style={{width: 80, height: 20,}} numberOfLines={3}>{this.state.echo[5]}</Text>
           
            </View>
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}