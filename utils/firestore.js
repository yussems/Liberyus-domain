import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const colRef = collection(db, "domains");

export async function addData(name, taken, days) {
  const newPerson =  await addDoc(colRef, {
    domaninName: name,
    whereToTake: taken,
    days: days,
  });
  return newPerson
}
export const takeData = async () => {
  let domains = [];
  const checkdata = await getDocs(colRef);
  checkdata.docs.forEach((res) => {
    domains.push({ ...res.data(), id: res.id });
  });
  return domains
};

export const deleteDomain = async (id) => {
  const docref = doc(colRef, id);
  await deleteDoc(docref);
};

export const updateDomain = async (updateID,NewDomainName,newDays,newTaken) => {
  const deleteRef = doc(colRef,updateID) 

  await updateDoc(deleteRef,{
      domaninName: NewDomainName,
      days:newDays,
      whereToTake: newTaken,
  })
}
