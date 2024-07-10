import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';

export default function WelcomeScreen({navigation}:any) {

  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground 
    source={{ uri: "https://previews.123rf.com/images/jickaro/jickaro2302/jickaro230200314/199304273-paisaje-de-fondo-de-videojuegos-con-monta%C3%B1as-y-bosques-en-p%C3%ADxeles-de-16-bits-ubicaci%C3%B3n-de-la.jpg" }}
    style={styles.container}
    >
      <Text style={styles.welcome}>Bienvenidos</Text>
      <View style={styles.btncontainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntexto} onPress={()=>navigation.navigate('Registro')}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.btntexto}>Iniciar Sesión</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    backgroundColor: "#666",
    height: 55,
    width: "80%",
    marginBottom: 15,
    borderRadius:40,
    paddingHorizontal: 25,
    fontSize: 30,
    color: 'white'
  },
  btntexto:{
    color:'white',
    fontSize:20,
    fontFamily: 'BigBlueTerm'
  },
  welcome:{
    color:'black',
    fontSize:50,
    marginBottom:20,
    fontFamily: 'BigBlueTerm'
  },
  button:{
    backgroundColor:'black',
    padding:15,
    borderRadius:25,
    margin:10,
    alignItems:'center',
    width:'80%'
  },
  btncontainer:{
    position:'absolute',
    bottom:50,
    width:'100%',
    alignItems:'center'
  },
})