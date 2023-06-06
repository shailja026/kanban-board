import React, {useState} from 'react'
import AddList from './AddNew';
import Style from './TodoCard.module.css'

const Card = ({cardInfo}) => {

  return (
    <div className={Style.container}>
        {cardInfo.title}
    </div>
  )
}

export default Card
