
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4HIrSRO2leDcAJmdYK-f4xFPyBICBRIo",
    authDomain: "pokeapp-os.firebaseapp.com",
    projectId: "pokeapp-os",
    storageBucket: "pokeapp-os.appspot.com",
    messagingSenderId: "759634190361",
    appId: "1:759634190361:web:74742e8bf7fef7f6ea4a88"
    };


const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()


const facebook = new FacebookAuthProvider()

export {app, google, facebook}