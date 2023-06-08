import React, {useState} from 'react'

import Style from './TodoCard.module.css'
import {BsPencilSquare} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { update,removeList } from '../../../store/listSlice';
import { createAction } from '@reduxjs/toolkit';
import {MdOutlineDelete} from "react-icons/md"
const Card = ({cardInfo}) => {
  const dispatch = useDispatch();

  
  
  const  Update = (cardInfo) => {
  const targetValue = cardInfo
  console.log(dispatch(update({targetValue})));
  }

   const RemoveList=({cardInfo}) => {
    // const payload = {
    //   parentId : cardInfo.parentId,
    //   id:cardInfo.id,
    //   title:cardInfo.title
    // };
    dispatch(removeList({cardInfo}))
   }
  return (
    <div className={Style.container}>
        {cardInfo.title}
       <button>
      <BsPencilSquare onClick={({cardInfo})=>Update(cardInfo)}/>
      </button>
       <button><MdOutlineDelete onClick={()=>RemoveList({cardInfo})}/></button>
    </div>
  )
}

export default Card
