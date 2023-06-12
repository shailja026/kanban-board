import React from 'react'
import List from './List'
import Style from './body.module.css';


const body = () => {
  return (
  
    <div style={{border:"3px solid blue" , display:"flex"}}>
      <div className={Style.container}><List /></div>
    </div>
  
  )
}

export default body
