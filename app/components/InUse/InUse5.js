import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class InUse5 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/inuse5');

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
            <Text style={{width: 100, height: 20, paddingLeft: 10}} >{this.state.echo[0]}</Text>
            <Text style={{width: 100, height: 20, paddingLeft: 10}} >{this.state.echo[3]}</Text>
            </View>
            <View>
            <Text style={{width: 230, height: 40, paddingLeft: 10}} numberOfLines={3}>{this.state.echo[1]}</Text>
            </View>
            <View style={{paddingLeft: 20}}>
            <Image source={{uri: this.state.echo[2]}} style={{resizeMode: "contain", height: 50, width: 50 }}/>
            </View>
           
            </View>
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}