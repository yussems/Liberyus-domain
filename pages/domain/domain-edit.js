import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";

import { MailOutlined, ExportOutlined } from "@ant-design/icons";
import Link from "next/link";


export default function DomainEdit() {
  return (
    
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href={"/domain/domain-add"}>Domain Ekle</Link>
      </Menu.Item>
      
    </Menu>
  );
}
