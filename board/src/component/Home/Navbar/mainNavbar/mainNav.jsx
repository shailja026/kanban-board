import React from "react";
import styles from "./mainNav.module.css";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { changeBackgraound } from "../../../../store/listSlice";
import { useState } from "react";

function MainNav({ setOpenSideMenu }) {
  const [bg , setBg] = useState(false)
  const dispatch = useDispatch()
  function changeBg() {
    setBg(!bg)
    dispatch(changeBackgraound(bg))
    

  }

  return (
    <div className={styles.maindiv}>
      <h1 className={styles.title}>Kanban board</h1>
      <Button
        className={styles.btn}
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={changeBg}
      >
       
        Change Background
      </Button>

    </div>
  );
}

export default MainNav;
