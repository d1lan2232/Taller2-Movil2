import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';


export default function CamaraScreen() {

    const [image, setImage] = useState("");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
    
  return (
    <ImageBackground source={{uri: "https://img3.wallspic.com/previews/5/9/1/6/5/156195/156195-el_minimalismo-arte-el_arte_abstracto-artista-arte_digital-550x310.jpg"}}
    style={styles.container}>
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
  });