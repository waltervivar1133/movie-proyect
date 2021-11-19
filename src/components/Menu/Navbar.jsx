import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import "./Menu.scss";

const Navbar =() => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo/>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Inicio</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}


export default Navbar