import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUlFLxCUZrWEBrXQ5tTtyOPkzxgvJTZH8",
    authDomain: "yoga-helth.firebaseapp.com",
    databaseURL: "https://yoga-helth-default-rtdb.firebaseio.com",
    projectId: "yoga-helth",
    storageBucket: "yoga-helth.appspot.com",
    messagingSenderId: "809168440817",
    appId: "1:809168440817:web:64752731f7ad3e892c8850",
    measurementId: "G-2Y90MH42XG"
  };

  export const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app);

  