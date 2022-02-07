import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import styles from "../../styles/DomainEdit.module.css";

import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { takeData } from "../../utils/firestore";
import Cards from "../../component/Cards";

 takeData().forEach(item => {
    const {days,domainName,id,whereToTake} = item
    return console.log(days);
 })

console.log(takeData().length);

export default function DomainEdit() {
  return (
    <div className={styles.container}>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link href={"/domain/domain-add"}>Domain Ekle</Link>
        </Menu.Item>
      </Menu>
      <main className={styles.content}>
        {
        // takeData().forEach(item => {
        //   const {days,domainName,id,whereToTake} = item
        //   return(
        //     <Cards key={id}  days={days} name={domainName} take={whereToTake}   />
        //   )
        // })
      }
      <Cards/>
      </main>
    </div>
  );
}
