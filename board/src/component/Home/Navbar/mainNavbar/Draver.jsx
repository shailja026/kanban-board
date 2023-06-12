import { Drawer, Grow } from "@mui/material";

import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changeBackgraound } from "../../../../store/listSlice";
import styles from "./draver.module.css";
import colorArray from "./color";
import imageArr from "./imgApi";
import { useState } from "react";
import { setColorOption, setImageOption } from "../../../../store/listSlice";
function Draver() {
  const { isChangeBgValue } = useSelector((store) => store.listSlice);
  const { colorOption } = useSelector((store) => store.listSlice);
  const { imageOption } = useSelector((store) => store.listSlice);
  console.log(isChangeBgValue);

  const dispatch = useDispatch();

  function closeDrawr() {
    // setcancel(!isChangeBgValue);
    dispatch(changeBackgraound(!isChangeBgValue)); // Pass the updated value directly
  }

  const colorFun = () => {
    dispatch(setColorOption(!colorOption));
    
  };
  const imageFun = () => {
    dispatch(setImageOption(!imageOption));
   
  };

  return (
    <div className={styles.main} style={{ width: "300x" }}>
      <Drawer anchor="right" open={true}>
        <div className={styles.operner} >
          <h1>Call your color</h1>
          <MdClose onClick={closeDrawr} size={25} />
        </div>
        <div className={styles.bgContainer}>
          <div className={styles.box1} onClick={colorFun}></div>
          <div className={styles.box2} onClick={imageFun}></div>
        </div>
        <Grow in={colorOption}>
          <div className={styles.colorOptions}>
            {colorArray.map((color, i) => {
              return (
                <div
                  key={i}
                  className={styles.color}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              );
            })}
          </div>
        </Grow>
        <Grow in={imageOption}>
          <div className={styles.imageOptions}>
            {imageArr.map((img, i) => {
              
              return (
                <div
                  key={i}
                  className={styles.color}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              );
            })}
          </div>
        </Grow>
      </Drawer>
    </div>
  );
}

export default Draver;
