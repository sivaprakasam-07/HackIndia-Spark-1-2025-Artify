import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCd6zBaSn3_giANUmHbSg1-pp7nDUVhx98",
    authDomain: "mindlancer-07.firebaseapp.com",
    projectId: "mindlancer-07",
    storageBucket: "mindlancer-07.firebasestorage.app",
    messagingSenderId: "567331403101",
    appId: "1:567331403101:web:37f415f069a55a7e36a4b4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };