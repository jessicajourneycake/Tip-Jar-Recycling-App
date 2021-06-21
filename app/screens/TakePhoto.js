import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function TakePhoto() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync({base64: true}) 
    
    console.debug(photo)
    fetch('https://tipjarjj.mybluemix.net/takephoto',{
        method: 'POST',
        body: JSON.stringify({photo}),
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response){
      return response.json()
      }).catch(error => console.log(error));
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_takePhoto}
          >
            <Text style={{marginTop: 50}}>Snap Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    </>
  );
}
