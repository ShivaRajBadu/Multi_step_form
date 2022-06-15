
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAV1C48gWIL0ey0yb1LcULo_st_9r9LFnA",
  authDomain: "phoneauth-a60a4.firebaseapp.com",
  projectId: "phoneauth-a60a4",
  storageBucket: "phoneauth-a60a4.appspot.com",
  messagingSenderId: "629027194816",
  appId: "1:629027194816:web:514aabec759b61f4642a25"
};

const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );