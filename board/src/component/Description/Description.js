import React from 'react'
import styles from "./Description.module.css"
import { BsEye } from 'react-icons/bs';
import { RiRadioFill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import {  HiUser } from 'react-icons/hi';
import {RxCross2} from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export  function Description() {
  const navigate = useNavigate()
  const backTohome = () => {
    navigate("/")

  }

  return (
    <div className={styles.Whole_Box}>

        <div className={styles.header_top}>
         <h3><RiRadioFill/>Add Card Element name</h3>
            <p>in list Title_Name</p>
          <button onClick={backTohome}>  <RxCross2/> </button>
        </div>

        <div className={styles.second_top}>
            <p>Notification</p>
            <button className={styles.watch_btn}><BsEye/>Watch</button>
        </div>

        <div className={styles.Description_top}>
          <h3><HiOutlineMenuAlt2/>Description</h3>
          <input className={styles.text_area} type="text" placeholder='Add a more detailed description...' />
        </div>

        <div className={styles.text_btn}>
         <button className={styles.save_btn}>save</button>
         <button className={styles.cancel_btn}>Cancel</button>
        </div>

        <div className={styles.Activity}>
          <h3> <AiOutlineAlignLeft/>Activity</h3>
          <div style={{fontSize:"1.5rem"}}> <HiUser/> <input className={styles.text_area_user} type="text" /></div>
        </div>
        <div className={styles.text_user_btn}>
         <button className={styles.save_btn_second}>save</button>
         <button className={styles.Watch_btn}>watch</button>
        </div>
    </div>
  )
}
