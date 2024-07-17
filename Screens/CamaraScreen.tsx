import React, { useState, useEffect } from 'react';
import { Button, Image, ImageBackground, StyleSheet, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
  const [image, setImage] = useState<string | null>(null);

  // Solicitar permisos al cargar la pantalla
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso necesario', 'Se necesita permiso para acceder a la cámara.');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    
    if (!result.canceled) {
      setImage(result.assets[0].uri);// Usar result.uri si está definido, de lo contrario usar una cadena vacía
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/b0/a3/9f/b0a39f0c29b4b05d261b55e8fd2d6415.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Button title="Tomar foto" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
