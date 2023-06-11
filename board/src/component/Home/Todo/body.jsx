import React from 'react'
import List from './List'
import Style from './body.module.css';
import {DragDropContext} from "react-beautiful-dnd"

const body = () => {
  return (
  
    <div style={{border:"3px solid blue"}}>
      {/* <div className={Style.container}><List /></div> */}
    </div>
  
  )
}

export default body
