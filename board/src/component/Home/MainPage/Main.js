import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import List from "../Todo/List";

import AddSome from "../Navbar/addSome";



function Main() {
  
  return (
    <>
      <Navbar />

     <AddSome/>
      <List />
    

    </>
  );
}

export default Main;
