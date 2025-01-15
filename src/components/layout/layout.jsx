import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import ScrollButton from "./scroll_button/scroll_button";


const Layout = ({ children }) => {
  return (
    <div>
      <ScrollButton/>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
