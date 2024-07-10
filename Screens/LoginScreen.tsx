import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../config/Config';

export default function LoginScreen({navigation}:any) {
  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  function login (){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate("Game");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
        console.log(errorMessage);
        
        let titulo=""
        let mensaje=""

        if( errorCode == "auth/wrong-password"){
          titulo="Error de contraseña"
          mensaje="Contraseña incorrecta, revisar credenciales"
        }else if( errorCode == "auth/user-not-found"){
          titulo="Error de usuario"
          mensaje="Usuario no encontrado, revisar el correo electronico"
        }else{
          titulo="Error de acceso"
          mensaje="Revisar credenciales de correo y contraseña"
        }


        Alert.alert(titulo, mensaje)
        
        setemail("");
        setpassword("");
  });

}

  return (
    
  <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1333010525/vector/simple-flat-pixel-art-illustration-of-cartoon-outdoor-landscape-background-pixel-arcade.jpg?s=170667a&w=0&k=20&c=6Ga9NO3Tl_eSOMCWTbH7qY4LEra7aUwCQZXldsHYtQ0=' }}
      style={styles.imagen}
    >

    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
      placeholder='Ingrese su correo'
      onChangeText={(texto) => (setemail(texto))}
      style={styles.input}/>
      <TextInput
      placeholder='Ingrese su contraseña'
      onChangeText={(texto) => (setpassword(texto))}
      style={styles.input}/>
      
      <TouchableOpacity style={styles.boton1} onPress={() => login()}>
        <Text style={{fontWeight: '800'}}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate("Welcome")}>
        <Text style={{fontWeight: '800'}}>Regresar</Text>
      </TouchableOpacity>
    </View>

    </ImageBackground>
  )
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
    backgroundColor: 'rgba(7, 49, 21, 0.8)', 
  },
  titulo:{
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
  },
  input:{
    backgroundColor: 'white',
    height: 50,
    width: '55%',
    margin: 10,
    marginBottom: 25,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 18,
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
})