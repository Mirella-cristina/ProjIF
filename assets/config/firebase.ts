import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-app.firebaseapp.com",
  projectId: "seu-app-id",
  storageBucket: "seu-app.appspot.com",
  messagingSenderId: "seu_sender_id",
  appId: "seu_app_id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
