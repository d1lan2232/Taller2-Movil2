import { ImageBackground, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
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
    source={{ uri: "https://static.filmin.es/images/es/media/42266/1/poster_0_3.webp" }}
    style={styles.container}
    >
      
      <View style={styles.btncontainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntexto} onPress={()=>navigation.navigate('Registro')}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('Login')}>
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
  
  btntexto:{
    color:'black',
    fontSize:20,
    fontFamily: 'BigBlueTerm'
  },
  
  button:{
    backgroundColor:'#FFC700',
    padding:15,
    borderRadius:25,
    margin:10,
    alignItems:'center',
    width:'80%'
  },
  button2:{
    backgroundColor:'#3CCF4E',
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