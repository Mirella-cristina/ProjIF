import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNNiQ7hyMxvIFumEvIQqqyKIf4sYAdHL0",
  authDomain: "projif-29569.firebaseapp.com",
  projectId: "projif-29569",
  storageBucket: "projif-29569.appspot.com",
  messagingSenderId: "786613040979",
  appId: "1:786613040979:web:f11f553fa7d5637b2913a6",
  measurementId: "G-7Z2DNPKR1Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
