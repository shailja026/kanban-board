import React from "react";

import Draver from "./mainNavbar/Draver";
import MainNav from "../Navbar/mainNavbar/mainNav";
import { useSelector } from "react-redux";

function AddSome() {
  const {isChangeBgValue} = useSelector(store => store.listSlice)
  console.log(isChangeBgValue)

  

  return (
    <div>
      <MainNav  />
      {isChangeBgValue ? <Draver /> :<></>} 
    </div>
  );
}

export default AddSome;
