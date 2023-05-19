import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDe3itfP3626KxPXfp0Oi_8eE0pe0YxdA0",
  authDomain: "project-7d6af.firebaseapp.com",
  projectId: "project-7d6af",
  storageBucket: "project-7d6af.appspot.com",
  messagingSenderId: "15720514088",
  appId: "1:15720514088:web:fd220d3ed5d23b26d7ab1d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)