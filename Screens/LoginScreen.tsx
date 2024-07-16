import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../config/Config';
import { useFonts } from 'expo-font';

export default function LoginScreen({navigation}: any) {

  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Game");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        
        let titulo = "";
        let mensaje = "";

        if (errorCode === "auth/wrong-password") {
          titulo = "Error de contraseña";
          mensaje = "Contraseña incorrecta, revisar credenciales";
        } else if (errorCode === "auth/user-not-found") {
          titulo = "Error de usuario";
          mensaje = "Usuario no encontrado, revisar el correo electrónico";
        } else {
          titulo = "Error de acceso";
          mensaje = "Revisar credenciales de correo y contraseña";
        }

        Alert.alert(titulo, mensaje);
        
        setEmail("");
        setPassword("");
      });
  }

  return (
    <ImageBackground
      source={{ uri: 'https://disruptivoo.com/wp-content/uploads/2022/08/Mejores-Fondos-de-Pantalla-de-Pacman-Fondos-Gamers-9.jpg' }}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder="Ingrese su correo"
          onChangeText={(texto) => setEmail(texto)}
          style={styles.input}
        />
        <TextInput
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChangeText={(texto) => setPassword(texto)}
          style={styles.input}
        />
        
        <TouchableOpacity style={styles.boton1} onPress={() => login()}>
          <Text style={styles.botonTexto}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.botonTexto}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'BigBlueTerm',
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    width: '80%',
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 15,
    fontFamily: 'BigBlueTerm',
  },
  boton1: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: "#2F89FC",
    width: '60%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  boton2: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: '#2F89FC',
    width: '60%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  botonTexto: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    fontFamily: 'BigBlueTerm',
  },
});
