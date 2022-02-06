import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgMfFgp-yUS-Ux1pAftFI75NnLNyxt-gk",
  authDomain: "liberyus-afb42.firebaseapp.com",
  projectId: "liberyus-afb42",
  storageBucket: "liberyus-afb42.appspot.com",
  messagingSenderId: "859416389549",
  appId: "1:859416389549:web:8331a1a6d5f52adf132324"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore()
export {db,auth}
