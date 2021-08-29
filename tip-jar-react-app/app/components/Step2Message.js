import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';


export default class Step2Message extends React.Component {

    constructor() {
        super();
      

        this.state = {
            echo: ['','']
           
          
        };
    }
   

    componentDidMount() {
        var socket = new WebSocket('https://tipjar-updated.mybluemix.net/ws/green2');

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
                    <Text style={{fontFamily: "Menlo", width: 450, height: 50, left: 70, top: -50, fontSize: 40, fontWeight: "bold"}}>One Item Check</Text>

            <Image source={{uri: this.state.echo[0]}} style={{fontFamily: "Menlo", width: 80, height: 90, left: 140, top: -30, fontSize: 50, fontWeight: "bold"}}/>
            </View>
            <View>
            <Text style={{fontFamily: "Menlo", width: 450, height: 70, left: 90, top: -50, fontSize: 40, fontWeight: "bold"}}>Tip</Text>

            <Text style={{fontFamily: "Menlo", width: 450, height: 60, left: 90, top: -60, fontSize: 50}}>${this.state.echo[1]}</Text>
            </View>
            </View>
            
           
    

</>
            

                
    
               
        )
        
        
    }
       
}