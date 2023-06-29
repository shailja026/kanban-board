import { Drawer, Grow } from "@mui/material";

import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { changeBackgraound } from "../../../../store/listSlice";
import styles from "./draver.module.css";
import colorArray from "./color";
import imageArr from "./imgApi";
import { useState } from "react";
import { setColorOption, setImageOption,addbackground } from "../../../../store/listSlice";
import Main from "../../MainPage/Main"

function Draver() {

  const [mainDisplay,setMainDisplay] = useState(false)
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
    // dispatch(setImageOption(false))
    
  };
  const imageFun = () => {
    dispatch(setImageOption(!imageOption));
    // dispatch(setColorOption(false))
   
  };
  const addNewBg = (color,id) => {
    console.log(color,id)
    if(color.id === id){
      dispatch(addbackground(color.color))
    }
    
  }

  return (
    <div className={styles.main}  >
      <Drawer anchor="right" open={true} >
        <div style={{width:"500px"}}>
        <div className={styles.operner} >
          <h1>Call your color</h1>
          <MdClose onClick={closeDrawr} size={25} />
        </div>
        <div className={styles.bgContainer}>
          <div className={styles.box1} onClick={colorFun}></div>
          <div className={styles.box2} onClick={imageFun}></div>
        </div>
        {colorOption ?   <div>
        <Grow in={colorOption}>
          <div className={styles.colorOptions}>
            { colorArray.map((color, i) => {
              return (
                <div
                  key={i}
                  id={color.id}
                  className={styles.color}
                  style={{

                    backgroundColor: color,

                  }}
                  onClick={(color,id)=>addNewBg(color,id)}
                ></div>
              );
            })}
          </div>
        </Grow>
        </div> :   <Grow in={true}>
          <div className={styles.imageOptions}>
            { imageArr.map((img, i) => {
              
              return (
                <div
                  key={i}
                  
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  
                ></div>
              );
            })}
          </div>
        </Grow>}
      
      
        </div>
      </Drawer>
    </div>
  );
}

export default Draver;
