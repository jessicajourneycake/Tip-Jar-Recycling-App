import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';

export default class Map extends React.Component {


getInitialState() {
    return {
      region: {
        latitude: 42.3930,
        longitude: -71.0810,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }
  
  render() {
    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
          <Marker
  coordinate={{ latitude : 42.391360 , longitude : -71.085670 }}
  image={{uri: 'custom_pin'}}
/>

          </MapView>
    );
  }
}
  