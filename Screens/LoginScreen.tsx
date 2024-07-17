import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';
import { useFonts } from 'expo-font';

export default function LoginScreen({ navigation }:any) {
  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!loaded && !error) {
    return null;
  }

  // Función para realizar el inicio de sesión
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso, navegar a la siguiente pantalla
        navigation.navigate('Game');
      })
      .catch((error) => {
        // Manejo de errores según el código de error devuelto por Firebase
        let errorMessage = 'Ocurrió un error. Revisa tus credenciales e inténtalo nuevamente.';
        
        if (error.code === 'auth/wrong-password') {
          errorMessage = 'Contraseña incorrecta. Verifica tu contraseña e intenta de nuevo.';
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = 'Usuario no encontrado. Verifica tu correo electrónico.';
        }

        Alert.alert('Error de inicio de sesión', errorMessage);
        setPassword(''); // Limpiar campo de contraseña
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://disruptivoo.com/wp-content/uploads/2022/08/Mejores-Fondos-de-Pantalla-de-Pacman-Fondos-Gamers-9.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Correo electrónico"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#ff9ba5' }]} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#2F89FC',
    width: '60%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    fontFamily: 'BigBlueTerm',
  },
});
