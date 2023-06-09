import React from 'react'
import AddNew from './AddNew'
import { useDispatch, useSelector } from 'react-redux'
import {MdEditSquare} from "react-icons/md"

import style from './list.module.css'
import Card from './TodoCard'
// import { useDeferredValue } from 'react'
import { update } from '../../../store/listSlice'

const List = () => {
  const dispatch = useDispatch()

  const listItem = useSelector(store => store.listSlice.list)

  const editHead = (id , text) => {
    console.log(id,text)
      dispatch(update({id,text}))
  }

  return (
    <div style={{ display: "flex" }}>
      
      {
      listItem && listItem.map((list) => (
        <div className={style.outer} key={list.id}>
          <div className={style.box}>
            <div className={style.title}> 
            <input value={list.title} onChange={(e)=>editHead(list.id , e.target.value)} />

            </div>
            {list?.children?.length > 0 && list.children.map((children) => <Card key={children.id} cardInfo={children} listId={list.id}/>)}
            <div className={style.new}><AddNew type='card' parentId={list.id} /></div>
          </div>
        </div>
      ))}
      <div className={style.outer}>
        <div className={style.list}>
          <AddNew />
        </div>
      </div>
    </div>
  )
}

export default List
