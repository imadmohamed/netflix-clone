import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA2COKTYTxzUVRcX2xxcJu0fvZQjQm3VHs",
    authDomain: "netflix-clone-b5c95.firebaseapp.com",
    projectId: "netflix-clone-b5c95",
    storageBucket: "netflix-clone-b5c95.firebasestorage.app",
    messagingSenderId: "560193642196",
    appId: "1:560193642196:web:db73c60ee2ef11b74c6541"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export {auth, db , app}