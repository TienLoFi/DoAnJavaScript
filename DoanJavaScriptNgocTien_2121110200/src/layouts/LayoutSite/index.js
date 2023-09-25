import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Copyright from "./Copyright";
import "./LayoutSiteStyle.css";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function LayoutSite() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <Menu />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
}

export default LayoutSite;
