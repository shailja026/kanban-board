import React from 'react'
import styles from "./Description.module.css"
import { BsEye } from 'react-icons/bs';
import { RiRadioFill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { disCription} from '../../store/listSlice';



export function Description() {
  const [info , setinfo] = useState("")
  const disptch = useDispatch()

  const { cardObj } = useSelector((state) => state.listSlice)
  // console.log("shailja", cardObj)




  const navigate = useNavigate()
  const backTohome = () => {
    navigate("/")

  }


  function handleSave(e) {
     e.preventDefault()
  
  setinfo("")




  }
  function handleChange(text){
    disptch(disptch(disCription({text})))
  // setinfo(e.target.value)
  }
  

  return (
    <div className={styles.Whole_Box}>

      <div className={styles.header_top}>
        <h3><RiRadioFill />{cardObj.title}</h3>

        <p>in list Title_Name</p>
        <button onClick={backTohome}>  <RxCross2 /> </button>
      </div>

      <div className={styles.second_top}>
        <p>Notification</p>
        <button className={styles.watch_btn}><BsEye />Watch</button>
      </div>

      <div className={styles.Description_top}>
        <h3><HiOutlineMenuAlt2 />Description</h3>

        {/* <input 
          className={styles.text_area} 
          type="text" 
           value={info}
           onChange={handleChange}
           /> */}
           {/* <form onSubmit={handleSubmit} className={style.form}>
        <input value={inputValue} onChange={handleChange} placeholder={type ? 'Enter Card' : 'Enter List'} className={style.input} />
        <div className={style.btn}>
          <button type='submit' className={style.save} >save</button> */}

        <form onSubmit={handleSave}>
          <input value={info} type='text' onChange={(e)=>handleChange(e.target.value)}/>
          <div className={styles.text_btn}>
            <button className={styles.save_btn} type='submit'>save</button>
            <button className={styles.cancel_btn}>Cancel</button>
          </div>
        </form>
      </div>



      <div className={styles.Activity}>
        <h3> <AiOutlineAlignLeft />Activity</h3>
        <div style={{ fontSize: "1.5rem" }}> <HiUser /> <input className={styles.text_area_user} type="text" /></div>
      </div>
      <div className={styles.text_user_btn}>
        <button className={styles.save_btn_second}>save</button>
        <button className={styles.Watch_btn}>watch</button>
      </div>
    </div>
  )
}
