import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image,Button, ImageBackground} from 'react-native';


export default class ReceiptMessage extends React.Component {

    constructor() {
        super();
     
        this.state = {
            echo: ['','','','']
           
          
        };
    }
   

    componentDidMount() {
        var socket = new WebSocket('https://tipjar-updated.mybluemix.net/ws/receipt');

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
            console.log({data});

            this.setState({echo: data.split(',')});
            setTimeout(() => {
                socket.send(new Date().toGMTString());
            }, 7000);
           
        }
       

        
    }
   
   
  

    render() {
       
        return (

           
            <>
   
            <View style={{ flexDirection: "row"}}>
        
            <View>
            <Text style={{fontFamily: "Menlo", width: 200, height: 30, left: 260, top: 20, fontSize: 16}}>{this.state.echo[0]}</Text>
            <Text style={{fontFamily: "Menlo", width: 170, height: 30, left: 140, top: 40, fontWeight: "bold", fontSize: 18}} numberOfLines={1}>Receipt ID</Text>
            <Text style={{fontFamily: "Menlo", width: 75, height: 30, left: 150, top: 40, fontSize: 18,fontWeight: "bold"}}>{this.state.echo[1]}</Text>
            </View>
            <View>
            <Text style={{fontFamily: "Menlo", width: 170, height: 60, left: 110, top: 70, fontWeight: "bold", fontSize: 18}} numberOfLines={2}>Number of Products Added</Text>
            <Text style={{fontFamily: "Menlo", width: 75, height: 30, left: 110, top: 60, fontSize: 18,fontWeight: "bold"}}>{this.state.echo[2]}</Text>
            <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/logo.png')} style={{top: 70, left: 70, resizeMode: "contain", height: 85, width: 55}}></Image>
            <Text style={{fontFamily: "Menlo", width: 115, height: 30, left: 85, top: 70, fontSize: 18, fontWeight: "bold"}}>Future Tip</Text>
            <Text style={{fontFamily: "Menlo", width: 110, height: 30, left: -25, top: 100, fontSize: 30, fontWeight: "bold"}}>${this.state.echo[3]}</Text>
            </View>
            </View>
            </View>
           
    

</>
            

                
    
               
        )
        
        
    }
       
}