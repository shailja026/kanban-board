import React from 'react'
import AddNew from './AddNew'
import { useDispatch, useSelector } from 'react-redux'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import style from './list.module.css'
import Card from './TodoCard'
import {MdDelete} from "react-icons/md"
import { deleteList } from '../../../store/listSlice'

import { update } from '../../../store/listSlice'

const List = () => {
  const dispatch = useDispatch();

  const listItem = useSelector((store) => store.listSlice.list);

  const editHead = (id, text) => {
    console.log(id, text)
    dispatch(update({ id, text }))
  }

  function handleDelete(id){
    console.log("listId",id);
    dispatch(deleteList(id))
    }

  return (

    // <div style={{ display: "flex" }}>
    <div style={{ display: "flex"}}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div style={{display:"flex"}} {...provided.droppableProps} ref={provided.innerRef}>
            {listItem &&
              listItem.map((list, index) => (
                <Draggable draggableId={list.id} key={list.id} index={index}>
                  {(provided) => (
                    <div
                      className={style.outer}
                      key={list.id}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                     
                      <div className={style.box}>
                      <MdDelete onClick={()=>handleDelete(list.id)} style={{
                        marginLeft:"200px",
                       fontSize:"30px"

                        }}/>
                        <div className={style.title}>
                          <input
                            value={list.title}
                            onChange={(e) => editHead(list.id, e.target.value)}
                          />
                        </div>
                        {list?.children?.length > 0 &&
                          list.children.map((children, index) => (
                         
                                  <Card
                                    key={children.id}
                                    cardInfo={children}
                                    cardId = {children.id}
                                    index={index}
                                    listId={list.id}
                                  />
                         
                          ))}
                        <div className={style.new}>
                          <AddNew type="card" parentId={list.id} />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={style.outer}>
        <div className={style.list}>
          <AddNew />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default List;