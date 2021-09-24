import React, {Component} from 'react';
import {StyleSheet, Button, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class BarcodeMessage extends React.Component {

    constructor() {
        super();
       

        this.state = {
            echo: ['','','','','']
           
        };
      
    }
   
    

    componentDidMount() {
        var socket = new WebSocket('https://tipjar-updated.mybluemix.net/ws/barcode');

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
        
            <View style={{flexDirection: "row"}}>
            <View>
            <Text style={{fontFamily: "Menlo", width: 200, height: 30, left: 170, top: 20, fontSize: 20, fontWeight: "bold"}}>{this.state.echo[3]}</Text>
            <Text style={{fontFamily: "Menlo", width: 220, height: 50, left: 40, top: 40, fontSize: 18,}} numberOfLines={2}>{this.state.echo[0]}</Text>
            <Text style={{fontFamily: "Menlo", width: 200, height: 20, left: 40, top: 60, fontSize: 18,fontWeight: "bold"}}>Golden Bin</Text>
            <Image source={{uri: this.state.echo[2]}} style={{left: 60, top: 75, resizeMode: "contain", height: 50, width: 50 }}/>
            </View>
            <View>
            <Image source={{uri: this.state.echo[1]}} style={{left: 70, top: 65, resizeMode: "contain", height: 50, width: 50 }}/>
            <Text style={{fontFamily: "Menlo", width: 100, height: 30, left: 70, top: 130, fontSize: 24, fontWeight: "bold"}}>${this.state.echo[4]}</Text>
                </View>
                
           
            </View>
           
    

</>
            

                
    
               
        )
        
        
    }
       
}