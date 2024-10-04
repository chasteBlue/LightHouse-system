// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBU2A_jpd5TQkjQuMdYd3LI_4mXTg023D4",
    authDomain: "lighthousehotel.firebaseapp.com",
    projectId: "lighthousehotel",
    storageBucket: "lighthousehotel.appspot.com",
    messagingSenderId: "550267530060",
    appId: "1:550267530060:web:ccdb52b6dbb4b6ef367de9",
    measurementId: "G-BCPVBH81TD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };