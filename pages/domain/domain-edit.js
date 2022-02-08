import React, { useEffect, useState } from "react";
import { Card, Menu } from "antd";
import "antd/dist/antd.css";
import styles from "../../styles/DomainEdit.module.css";

import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { takeData } from "../../utils/firestore";
import Cards from "../../component/Cards";

export default function DomainEdit() {
  const [data, setData] = useState([]);

  
  // useEffect(() => {
    // if (data) {
      //   takeData().then((item) => setData(item));
      // }
      // }, []);
// takeData().then(item => setData(item))

// console.log(data);

  return (
    <div className={styles.container}>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link href={"/domain/domain-add"}>Domain Ekle</Link>
        </Menu.Item>
      </Menu>
      <main className={styles.content}>
        <Cards data={data} />
      </main>
    </div>
  );
}
