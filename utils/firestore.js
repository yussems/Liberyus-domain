import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const colRef = collection(db,'domains')

export function addData(name,taken,days) {
    addDoc(colRef,{
        domaninName: name,
        whereToTake: taken,
        days:days
    })
}
export const  takeData = () => {
    let domains = []
    onSnapshot(colRef,snapShot=> {
        snapShot.docs.forEach(res => {
            domains.push({...res.data(),id:res.id})
        })
    })
    return domains
} 