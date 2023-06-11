import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changeBackgraound } from "../../../../store/listSlice";

function Draver() {
  const { isChangeBgValue } = useSelector((store) => store.listSlice);
  console.log(isChangeBgValue);
  const [cancel, setcancel] = useState(isChangeBgValue);
  const dispatch = useDispatch();

  function closeDrawr() {
    // setcancel(!isChangeBgValue);
    dispatch(changeBackgraound(!isChangeBgValue)); // Pass the updated value directly
  }

  return (
    <div>
      <Drawer anchor="right" open={true}>
        <h1 style={{ width: "400px" }}>hello world</h1>
        <MdClose onClick={closeDrawr} size={25} />
      </Drawer>
    </div>
  );
}

export default Draver;
