import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

import "./MasterLayout.css";
const MasterLayout = () => {
  return (
    <>
      <NavBar />
      <div className="outlet-w">
        <Outlet />
      </div>
    </>
  );
};

export default MasterLayout;
