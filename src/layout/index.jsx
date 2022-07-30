import React, { useState } from "react";
import Content from "../component/Content/";
import Navbar from "../component/Navbar/";
import Sidebar from "../component/Sidebar/";
import Hero from "../component/HeroSection/";
import Info from "../component/Info/";
import "react-notifications/lib/notifications.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Footer from "../component/Footer/";
import "../asset/layout/layout.css"; // or 'antd/dist/antd.less'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info />
    </>
  );
};

export default Layout;
