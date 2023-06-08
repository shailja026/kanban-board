import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { addList } from '../../../store/listSlice';
import { addCard } from '../../../store/listSlice';
import { useDispatch } from 'react-redux';
import style from './AddNew.module.css';
import {v4} from "uuid"

const AddNew = ({ type, parentId }) => {

  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const openForm = () => {
    setIsVisible(true)
  }

  const hideForm = () => {
    setIsVisible(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type) {
      dispatch(addCard({
        id: v4(),
        title: inputValue,
        parentId: parentId
      }))
    } else {
      dispatch(addList({
         id: v4(),
        title: inputValue
      }))
    }

    hideForm();
    setInputValue(" ")
  }

  return (

    <div className={style.list_container}>
      
      {isVisible && <form onSubmit={handleSubmit} className={style.form}>
        <input value={inputValue} onChange={handleChange} placeholder={type ? 'Enter Card' : 'Enter List'} className={style.input} />
        <div className={style.btn}>
          <button type='submit' className={style.save} >save</button>
          <RxCross2 onClick={hideForm} className={style.cancel} style={{fontSize:"25px"}} />
        </div>
      </form>}
      <button onClick={openForm} className={style.addNew} >+ Add {type ? 'a card' : 'another list'} </button>
    </div>
  
  )
}

export default AddNew
