
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMR3n2X-EyrPi5DXnS8v6V3z-dVYVak7o",
    authDomain: "emajon-simple-9ce7d.firebaseapp.com",
    projectId: "emajon-simple-9ce7d",
    storageBucket: "emajon-simple-9ce7d.appspot.com",
    messagingSenderId: "321618282839",
    appId: "1:321618282839:web:6a6b288e080fe7d8789612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;