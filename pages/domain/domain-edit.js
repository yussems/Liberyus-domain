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
  const [render, setRender] = useState(false);

  useEffect(() => {
      takeData().then((item) => setData(item));
  }, [render]);

  return (
    <div className={styles.container}>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link href={"/domain/domain-add"}>Domain Ekle</Link>
        </Menu.Item>
      </Menu>
      <main className={styles.content}>
        <Cards setRender={setRender} render={render} data={data} />
      </main>
    </div>
  );
}
