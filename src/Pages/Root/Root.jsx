import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Spiner from "./Spiner";
const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <Spiner></Spiner> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Root;
