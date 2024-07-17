import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function ScoreScreen({ navigation }: any) {
  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg' }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Puntuaciones</Text>

        <View style={styles.scoreContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Nick</Text>
            <Text style={styles.score}>Puntuación</Text>
          </View>
          
          {/* Ejemplo de datos de puntuación */}
          <View style={styles.row}>
            <Text style={styles.label}>Usuario1</Text>
            <Text style={styles.score}>1000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Usuario2</Text>
            <Text style={styles.score}>950</Text>
          </View>
          {/* Fin del ejemplo */}

        </View>

        <Button title='Volver' color='#00bfff' onPress={() => navigation.navigate('Game')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 55, 27, 0.8)',
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'BigBlueTerm',
  },
  scoreContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
  },
});
