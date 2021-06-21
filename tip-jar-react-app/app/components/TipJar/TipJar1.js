import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class TipJar1 extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ['','','','']
           
          
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjargold.a8mnj2x1n5f.eu-de.codeengine.appdomain.cloud/ws/tipjar1');

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
                <View style={{flexDirection: "row", borderBottomWidth: 2, borderColor: "whitesmoke"}}>
                    <View>
                        <Text style={{width: 120, height: 30, top: 15 ,left: 10, fontSize: 15, fontFamily: "Menlo"}} numberOfLines={3}>{this.state.echo[0]}</Text>
                    </View>
                    <View>
                        <Image source={{uri: this.state.echo[1]}} style={{resizeMode: "contain", height: 50, width: 50, marginLeft: 13, }}/>
                    </View>
                    <View>
                        <Text style={{width: 120, height: 30, top: 15, paddingLeft: 80, fontSize: 15, fontFamily:"Menlo"}} >{this.state.echo[3]}</Text>
                    </View>
                    
                    <View style={{paddingLeft: 5}}>
                        <Text style={{width: 120, height: 30, paddingLeft: 50, top: 15, fontSize: 15, fontFamily: "Menlo"}} numberOfLines={3}>{this.state.echo[2]}</Text>
                    </View>
                </View>
            </SafeAreaView>
           

</>
            

                
    
               
        )
        
        
    }
       
}