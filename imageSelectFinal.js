import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput'


export default function ImagePickerExample() {
  
  const [imageUri, setImageUri] = useState();


  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    setImageUri(result.uri);
  }
  
  return (
  <Screen>
    <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
  </Screen>
  );
}