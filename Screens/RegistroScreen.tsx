import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';
import { useFonts } from 'expo-font';

export default function RegistroScreen({ navigation }:any) {
  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nick, setNick] = useState('');
  const [edad, setEdad] = useState('');

  if (!loaded && !error) {
    return null;
  }

  // Función para guardar usuarios en Firebase
  const guardarUsuarios = () => {
    if (!correo || !contrasena || !nick || !edad) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    set(ref(db, 'users/' + nick), {
      username: nick,
      email: correo,
      password: contrasena,
      age: edad
    }).then(() => {
      Alert.alert("Éxito", "Información guardada correctamente");
      setCorreo('');
      setContrasena('');
      setNick('');
      setEdad('');
      navigation.navigate('Login');
    }).catch((error) => {
      Alert.alert('Error', 'No se pudo guardar la información. Inténtelo de nuevo más tarde.');
      console.error('Error saving user:', error);
    });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        <TextInput
          placeholder='Ingrese correo'
          onChangeText={text => setCorreo(text)}
          value={correo}
          style={styles.input}
          keyboardType='email-address'
        />

        <TextInput
          placeholder='Ingrese contraseña'
          onChangeText={text => setContrasena(text)}
          value={contrasena}
          style={styles.input}
          secureTextEntry={true}
        />

        <TextInput
          placeholder='Ingrese nick'
          onChangeText={text => setNick(text)}
          value={nick}
          style={styles.input}
        />

        <TextInput
          placeholder='Ingrese su Edad'
          onChangeText={text => setEdad(text)}
          value={edad}
          style={styles.input}
          keyboardType='numeric'
        />

        <TouchableOpacity style={styles.button} onPress={guardarUsuarios}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#ff9ba5' }]} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 55, 27, 0.8)',
    padding: 20,
  },
  title: {
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'BigBlueTerm',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 18,
    fontFamily: 'BigBlueTerm',
  },
  button: {
    backgroundColor: '#b9fcb6',
    width: '50%',
    height: 50,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 18,
  },
});
