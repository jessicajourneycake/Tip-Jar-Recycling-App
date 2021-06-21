import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Card from '../components/Card';

export default class ListingEditScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            echo: ''
        };
    }

    componentDidMount() {
        var socket = new WebSocket('wss://tipjarjj.mybluemix.net/ws/imageone');

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
                    
            <View>
                <Text>{this.state.echo}</Text>
              <FlatList
                data={this.state.echo}
                keyExtractor={(data) => data.id.toString()}
                renderItem={({ item }) => (
                <Card
                  title={item.NAME}
                  subTitle={item.DATE}
                />
              )}
            />
               
                    
        </View>
          
        )  
    }
}