// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"



import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyB0pbmVxzLTP6iXVTqureMsiQmQ4RjOOsg",
  authDomain: "taller1-22bce.firebaseapp.com",
  projectId: "taller1-22bce",
  storageBucket: "taller1-22bce.appspot.com",
  messagingSenderId: "591265704130",
  appId: "1:591265704130:web:9bc381009b5957565db35b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});