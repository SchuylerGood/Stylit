// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2TzeqLwiUWmMmIHld5pgzya5rAP4Ux4",
  authDomain: "fir-auth-d3a85.firebaseapp.com",
  projectId: "fir-auth-d3a85",
  storageBucket: "fir-auth-d3a85.appspot.com",
  messagingSenderId: "197240473925",
  appId: "1:197240473925:web:e27e23c4072af842d6962c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };