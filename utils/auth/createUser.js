import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function createUser(email, password) {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
}
