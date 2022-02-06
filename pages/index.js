import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log(email,password);
  const handleSumbit = async (e) => {
    
    e.preventDefault();

    const newUser = await createUserWithEmailAndPassword(auth, email, password)
      
    return newUser

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
      </div>
    </div>
  );
}
