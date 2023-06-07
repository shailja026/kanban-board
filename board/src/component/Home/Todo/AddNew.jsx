import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { addList } from '../../../store/listSlice';
import { addCard } from '../../../store/listSlice';
import { useDispatch } from 'react-redux';
import style from './AddNew.module.css';

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
        id: Math.random(),
        title: inputValue,
        parentId: parentId
      }))
    } else {
      dispatch(addList({
        id: Math.random(),
        title: inputValue
      }))
    }

    hideForm();
    setInputValue(" ")
  }

  return (
    <div className={style.list_container}>
      <button onClick={openForm}>+ Add {type ? 'a card' : 'another list'}</button>
      {isVisible && <form onSubmit={handleSubmit} className={style.form}>
        <input value={inputValue} onChange={handleChange} placeholder={type ? 'Enter Card' : 'Enter List'} className={style.input} />
        <div>
          <button type='submit' className={style.save}>save</button>
          <RxCross2 onClick={hideForm} className={style.cancel} />
        </div>
      </form>}
    </div>
  )
}

export default AddNew
