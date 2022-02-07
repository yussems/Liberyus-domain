import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";

import { MailOutlined, ExportOutlined } from "@ant-design/icons";
import Link from "next/link";

function Header({ handleClick }) {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href={"/domain/domain-edit"}>Domainler</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => handleClick()}
        key="app"
        icon={<ExportOutlined />}
      >
        Çıkış
      </Menu.Item>
    </Menu>
  );
}

export default Header;
