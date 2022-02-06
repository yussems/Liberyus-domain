import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export async function createUser(email, password) {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(email, password) {
  try {
    const sign = await signInWithEmailAndPassword(auth, email, password);
    console.log(sign.user);
  } catch (error) {
    console.log(error);
  }
}
export async function signOff(param) {
  await signOff(param);
}

export async function monitoringAuthState() {
    onAuthStateChanged(auth,user=> {
        if(user){
            console.log('kulllanıcı var');
        }
        else{
            console.log('kullanıcı yok');
        }
    })
}