import React from "react";
import AddForm from "../../component/AddForm";
import Header from "../../component/Header";
import styles from '../../styles/Domainadd.module.css'

export default function DomainAdd() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <AddForm />
      </main>
    </div>
  );
}
