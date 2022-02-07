import { useRouter } from "next/router";
import React from "react";
import AddForm from "../../component/AddForm";
import Header from "../../component/Header";
import styles from "../../styles/Domainadd.module.css";
import { AuthContextProvider, useUserContext } from "../../utils/Context";

export default function DomainAdd() {
  const router = useRouter();

const {logOut} =useUserContext()
  
const handleClick =() => {
  logOut()
  router.push('/')
}

  return (
    <AuthContextProvider>
      <div className={styles.container}>
        <Header handleClick={handleClick} />
        <main className={styles.content}>
          <AddForm />
        </main>
      </div>
    </AuthContextProvider>
  );
}
