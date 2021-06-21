import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

export default class WebSocket extends React.Component {

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
          console.log(data);

          this.setState({echo: data});


          setTimeout(() => {
              socket.send(new Date().toGMTString());
          }, 3000);
      }
  }

  render() {
    return (
    <Screen style={styles.screen}>
    
      <FlatList
        data={this.state.echo}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item[0].NAME}
            imageUrl={item[0].IMAGE}
            
          />
        )}
      />
    </Screen>
  );
}}