// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTw5MqS_7OFzPf_u6Zxkzq2Uyh5lG-DGQ",
  authDomain: "tree-plant-store.firebaseapp.com",
  projectId: "tree-plant-store",
  storageBucket: "tree-plant-store.firebasestorage.app",
  messagingSenderId: "981386914011",
  appId: "1:981386914011:web:8a14014252c72bc823c4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
