import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export async function domain(name,surname,born) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: name,
      last: surname,
      born: born,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
