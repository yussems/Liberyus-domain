import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const colRef = collection(db,'domains')

export function addData(name,taken,days) {
    addDoc(colRef,{
        domaninName: name,
        whereToTake: taken,
        days:days
    })
}