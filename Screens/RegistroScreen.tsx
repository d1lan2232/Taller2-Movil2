import { Alert, Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function RegistroScreen({navigation}:any) {

  const [correo, setcorreo] = useState("")
  const [contrasena, setcontrasena] = useState("")
  const [nick, setnick] = useState("")
  const [edad, setedad] = useState("")

  //Guardar usuarios 
  function guardarUsuarios() {
  set(ref(db, 'users/' + nick), {
    username: nick,
    email: correo,
    password : contrasena,
    age: edad
  });
  Alert.alert ("Mensaje", "Informacion guardada");
  setcorreo("");
  setcontrasena("");
  setnick("");
  setedad("");
}


  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        <TextInput
          placeholder='Ingrese correo'
          onChangeText={(texto) => setcorreo(texto)}
          value={correo}
          style={styles.input}
          keyboardType='email-address'
        />

        <TextInput
          placeholder='Ingrese contraseña'
          onChangeText={(texto) => setcontrasena(texto)}
          value={contrasena}
          style={styles.input}
          secureTextEntry={true}
        />

        <TextInput
          placeholder='Ingrese nick'
          onChangeText={(texto) => setnick(texto)}
          value={nick}
          style={styles.input}

        />

        <TextInput
          placeholder='Ingrese su Edad'
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(texto) => setedad(texto)}
          value={edad}
        />

      <TouchableOpacity style={styles.boton1} onPress={() => {guardarUsuarios(); navigation.navigate('Login')}}>
          <Text style={{fontWeight: '800'}}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate("Welcome")}>
          <Text style={{fontWeight: '800'}}>Regresar</Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 55, 27, 0.8)', 
  },
  title: {
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 18,
  },
  boton: {
    color: '#00bfff',
  },
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
  boton1:{
    borderWidth: 2,
    borderColor: 'black',
    padding:10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: "#b9fcb6",
    width: '30%',
    alignItems: 'center'
  },
  boton2:{
    borderWidth: 2,
    borderColor: 'black',
    padding:10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: '#ff9ba5',
    width: '30%',
    alignItems: 'center'
  }
});
