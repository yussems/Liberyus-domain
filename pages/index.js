import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";
import { monitoringAuthState, signIn } from "../utils/auth/createUser";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { domain } from "../utils/db/db";

import { collection, getDocs } from "firebase/firestore";

monitoringAuthState();

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [born, setBorn] = useState("");
  const [data, setData] = useState([]);

  async function getdat() {
    const querySnapshot = await getDocs(collection(db, "users"));
    // .then(item => console.log(item.docs))
    querySnapshot.docs.forEach((item) => console.log(item));
  }
  useEffect(() => {
    getdat()
  },[])
  getdat();
  const handleSumbit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  const handleclick = async () => {
    await signOut(auth);
  };
  const handleDomain = (e) => {
    e.preventDefault();
    domain(name, surname, born);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Liberyus Domain Service</title>
        <meta name="description" content="Liberyus domain check system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <form onSubmit={handleSumbit}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>send</button>
        </form>

        <form onSubmit={handleDomain}>
          <label htmlFor="email">name</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="surname">surname</label>
          <input
            type="text"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <label htmlFor="born">born</label>
          <input
            type="number"
            id="born"
            onChange={(e) => setBorn(e.target.value)}
          />
          <button>send</button>
        </form>

        <button onClick={handleclick}>deneme</button>
      </div>
    </div>
  );
}
