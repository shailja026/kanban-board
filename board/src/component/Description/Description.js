import React from "react";
import styles from "./Description.module.css";
import { BsEye } from "react-icons/bs";
import { RiRadioFill } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { disCription } from "../../store/listSlice";
import { Input } from "@chakra-ui/react";

export function Description() {
  const [info, setinfo] = useState("");
  const disptch = useDispatch();

  const { cardObj } = useSelector((state) => state.listSlice);
  console.log("shailja", cardObj);
  const list_el = useSelector((state) => state.listSlice.list);
  console.log(list_el);

  const [inputpVal, setInputVal] = useState(cardObj);

  const navigate = useNavigate();
  const backTohome = () => {
    navigate("/");
    console.log(inputpVal);
  };

  const editData = (id, text) => {
    disptch(disCription({ id, text }));
  };

  return (
   
        

        <div>
          <div className={styles.Whole_Box}>
            <div className={styles.header_top}>
              <h3>
                <RiRadioFill />
                Add Card Element name
              </h3>
              <input
          value={cardObj.title}
          onChange={(e) => editData(cardObj.id, e.target)}
        />

        <button onClick={backTohome}>
          {" "}
          <RxCross2 />{" "}
        </button>
            </div>
            <div className={styles.second_top}>
              <p>Notification</p>
              <button className={styles.watch_btn}>
                <BsEye />
                Watch
              </button>
            </div>
            <div className={styles.Description_top}>
              <h3>
                <HiOutlineMenuAlt2 />
                Description
              </h3>
              <input
                className={styles.text_area}
                type="text"
                placeholder="Add a more detailed description..."
              />
            </div>
            <div className={styles.text_btn}>
              <button className={styles.save_btn}>save</button>
              <button className={styles.cancel_btn}>Cancel</button>
            </div>
            <div className={styles.Activity}>
              <h3>
                {" "}
                <AiOutlineAlignLeft />
                Activity
              </h3>

              
              <div style={{ fontSize: "1.5rem" }}>
                {" "}
                <HiUser />{" "}
                <input className={styles.text_area_user} type="text" />
              </div>
            </div>
            <div className={styles.text_user_btn}>
              <button className={styles.save_btn_second}>save</button>
              <button className={styles.Watch_btn}>watch</button>
            </div>
                
          </div>
        </div>
    
  );
}
