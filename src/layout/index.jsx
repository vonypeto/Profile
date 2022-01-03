import React, { useState } from "react";
import Content from "../component/Content/";
import Navbar from "../component/Navbar/";
import Sidbar from "../component/Sidebar/";
import Hero from "../component/HeroSection/";

import Footer from "../component/Footer/";
import "../asset/layout/layout.css"; // or 'antd/dist/antd.less'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      HELLLO
    </>
  );
};

export default Layout;
