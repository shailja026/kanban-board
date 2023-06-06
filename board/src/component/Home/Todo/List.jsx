import React from 'react'
import AddNew from './AddNew'
import { useSelector } from 'react-redux'
import store from '../../../store'
import style from './list.module.css'
import Card from './TodoCard'

const List = () => {

  const listItem = useSelector(store => store.listSlice.list)

  return (
    <div>
    {listItem.map((list) => (
      <div className={style.outer} key={list.id}>
        <div className={style.box}>
          <div className={style.title}>{list.title}</div>
          {list?.children?.length > 0 && list.children.map((children) => <Card key={children.id} cardInfo = {children} />)} 
          <div className={style.new}><AddNew type='card' parentId={list.id}/></div>
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
