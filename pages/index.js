import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import { createUser } from "../utils/auth/createUser";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit =  (e) => {
    e.preventDefault();
    createUser(email,password)
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
