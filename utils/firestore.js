import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const colRef = collection(db, "domains");

export function addData(name, taken, days) {
  addDoc(colRef, {
    domaninName: name,
    whereToTake: taken,
    days: days,
  });
}
export const takeData = async () => {
  let domains = [];
  const checkdata = await getDocs(colRef);
  checkdata.docs.forEach((res) => {
    domains.push({ ...res.data(), id: res.id });
  });
  return domains;
};

export const deleteDomain = async (id) => {
  const docref = doc(colRef, id);
  await deleteDoc(docref);
};
