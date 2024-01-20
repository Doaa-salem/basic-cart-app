import React from "react";
import AppNavbar from "./AppNavbar";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
