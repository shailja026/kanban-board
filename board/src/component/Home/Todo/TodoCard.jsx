import React, {useState} from 'react'

import Style from './TodoCard.module.css'
import {BsPencilSquare} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { update,removeList } from '../../../store/listSlice';
import { createAction } from '@reduxjs/toolkit';
import {MdOutlineDelete} from "react-icons/md"
import { useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import { Description } from '../../Description/Description';


const Card = ({cardInfo,listId}) => {
  const dispatch = useDispatch();
  const arr = useSelector((state)=> state.listSlice.list)
  const navigate = useNavigate()


  
 

  const navigation= ()=> {

    navigate(`/description/:${cardInfo.id}`)

  }

   const RemoveList=({cardInfo,listId}) => {
  
    dispatch(removeList({cardInfo,listId}))
   
   }
  return (
   
    <div className={Style.container}>
        {cardInfo.title}
       <button  onClick={navigation}>
      <BsPencilSquare />
      </button>
       <button onClick={()=>RemoveList({cardInfo,listId})}><MdOutlineDelete /></button>
    </div>
  
  )
}

export default Card
