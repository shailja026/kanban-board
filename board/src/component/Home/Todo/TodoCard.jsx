import { removeList } from "../../../store/listSlice";
import Style from "./TodoCard.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { setCardObject } from "../../../store/listSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";
import {useState} from "react"



const Card = ({ cardInfo, listId, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cardInfo)

  const [editable, setEditable] = useState(false);
  function edit() {
    setEditable(true);
  }

  // routing
  const navigation = (cardInfo) => {
    dispatch(setCardObject(cardInfo));
    navigate(`/description/:${cardInfo.id}`);
  };

  // deleting elements
  const RemoveList = ({ cardInfo, listId }) => {
    dispatch(removeList({ cardInfo, listId }));
  };
  return (
    <>
      <Droppable droppableId={listId} type="card">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable draggableId={cardInfo.id} index={index}>
              {(provided) => (
                <div
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <div className={Style.container}>
                    <p
                      contentEditable={editable}
                      onDoubleClick={() => navigation(cardInfo)}
                    >
                      {cardInfo.title}{" "}
                    </p>
                    <button onClick={edit}>
                      <BsPencilSquare />
                    
                    </button>
                    <button onClick={() => RemoveList({ cardInfo, listId })}>
                      <MdOutlineDelete className={Style.icon} />
                    </button>
                  </div>
                </div>
              )}
            </Draggable>
          </div>
        )}
      </Droppable>
    </>
  );
};

export default Card;
