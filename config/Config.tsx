// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
<<<<<<< HEAD
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage, } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
=======
>>>>>>> f405f25b92cb70aadec0bb58aa9a7a2ba893b59b



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
<<<<<<< HEAD

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app);
=======
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
>>>>>>> f405f25b92cb70aadec0bb58aa9a7a2ba893b59b
