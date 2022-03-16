import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyBTyPlKWelW4Fr7EszNKsrHkcISduc4cTg",

  authDomain: "proyectofinaljesus-70625.firebaseapp.com",

  projectId: "proyectofinaljesus-70625",

  storageBucket: "proyectofinaljesus-70625.appspot.com",

  messagingSenderId: "713166000669",

  appId: "1:713166000669:web:26e110ff98c04e258aacf4"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
