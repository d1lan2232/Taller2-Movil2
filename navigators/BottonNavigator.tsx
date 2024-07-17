import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegistroScreen from '../Screens/RegistroScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import GameScreen from '../Screens/GameScreen';
import CamaraScreen from '../Screens/CamaraScreen';
import GaleriaScreen from '../Screens/GaleriaScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName=''>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Drawer.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}}/>
      <Drawer.Screen name="Camara" component={CamaraScreen} />
      <Drawer.Screen name='Galeria' component={GaleriaScreen} />
      <Drawer.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Score" component={ScoreScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Camara" component={CamaraScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Score" component={ScoreScreen}/>
    </Stack.Navigator>
  );
}

  
export default function Navegator(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}




