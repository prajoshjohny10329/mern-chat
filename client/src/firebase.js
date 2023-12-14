import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGfW5J3_KWV-TLFr94-KjnbiOhwGovMlQ",
    authDomain: "mern-chat-5ef24.firebaseapp.com",
    projectId: "mern-chat-5ef24",
    storageBucket: "mern-chat-5ef24.appspot.com",
    messagingSenderId: "547266436390",
    appId: "1:547266436390:web:5d93879ab55c5bcd9735e7"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth();
  const provider = new GoogleAuthProvider()

  export {app, auth, provider};