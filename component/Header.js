import React from "react";
import { Menu } from "antd";
import 'antd/dist/antd.css';

import {
  MailOutlined,
  ExportOutlined
} from "@ant-design/icons";



function Header() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined /> } >
        Log in
      </Menu.Item>
      <Menu.Item key="app"  icon={<ExportOutlined />}>
        Log out
      </Menu.Item>
    </Menu>
  );
}

export default Header;
