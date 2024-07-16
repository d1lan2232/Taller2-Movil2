import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { useFonts } from 'expo-font';
import { Audio } from 'expo-av';

export default function GameScreen() {
  const [loaded, error] = useFonts({
    'BigBlueTerm': require('../assets/fonts/BigBlueTerm437NerdFont-Regular.ttf'),
  });

  if (!loaded && !error) {
    return null;
  }

  const localHtmlFile = require('../Game/pacman.html');
  const [sound, setSound] = useState<Audio.Sound | null>(null); 
 
  async function playSound() { 
    const { sound } = await Audio.Sound.createAsync( 
       require('../assets/sounds/pacman.mp3') 
    ); 
    setSound(sound); 
 
    await sound.playAsync(); 
  } 
 
  useEffect(() => { 
    playSound(); 
 
    return () => { 
      if (sound) { 
        sound.unloadAsync(); 
      } 
    }; 
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={localHtmlFile}
        style={styles.pacman}
      />
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pacman: {
    width: "100%",
    height: "100%",
    flex: 1, 
    backgroundColor: '#000000', 
  },
});
