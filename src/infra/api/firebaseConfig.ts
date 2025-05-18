import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkfB491bWwgK3gjSH_da4JEsqDIIzHWpw",
    authDomain: "star-wars-danilo.firebaseapp.com",
    databaseURL: "https://star-wars-danilo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "star-wars-danilo",
    storageBucket: "star-wars-danilo.firebasestorage.app",
    messagingSenderId: "888074383902",
    appId: "1:888074383902:web:175852364dc4f3aa48b40f"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);