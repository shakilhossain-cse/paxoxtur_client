// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// TODO: Add SDKs for Firebase products that you want to use

// Initialize Firebase
const initializeFirebaseApp = () => initializeApp(firebaseConfig);
export default initializeFirebaseApp;