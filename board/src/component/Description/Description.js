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
import { disCription } from '../../store/listSlice';
import { Input } from '@chakra-ui/react'



export function Description() {
 
  const [info, setinfo] = useState("")
  const disptch = useDispatch()

  const { cardObj } = useSelector((state) => state.listSlice)
   console.log("shailja", cardObj)
  const list_el = useSelector((state) => state.listSlice.list);
  console.log(list_el)

  const[inputpVal,setInputVal] = useState(cardObj)




  const navigate = useNavigate()
  const backTohome = () => {
    navigate("/")
    console.log(inputpVal)

  }


 const editData = (obj, text) => {
 disptch(disCription(obj,text))

 }

  


  return (
    <div className={styles.Whole_Box}>

      <div className={styles.header_top}>
        <input value={cardObj.title} onChange={(e) => editData(cardObj ,e.value.target)}/>
        <Input placeholder='medium size' size='md' />
        <button onClick={backTohome}>  <RxCross2 /> </button>
      </div>
     </div>
  )
}
