import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class Receipt0 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjess.mybluemix.net/ws/receiptzero');

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
                
            <Text style={{width: 80, height: 20, }} >{this.state.echo[0]}</Text>
            <Text style={{width: 80, height: 20, }}>{this.state.echo[1]}</Text>
            <Text style={{width: 80, height: 20, }}>{this.state.echo[2]}</Text>
            <Text style={{width: 80, height: 20, }} >{this.state.echo[3]}</Text>
            <Text style={{width: 80, height: 20, }} >{this.state.echo[4]}</Text>
            </View>
 
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}