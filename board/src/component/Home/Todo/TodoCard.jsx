
import { removeList } from '../../../store/listSlice';
import Style from './TodoCard.module.css'
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { setCardObject } from '../../../store/listSlice';



const Card = ({ cardInfo, listId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log(cardInfo)

  // routing
  const navigation = (cardInfo) => {
    dispatch(setCardObject(cardInfo))
    navigate(`/description/:${cardInfo.id}`)
   

  }

  // deleting elements
  const RemoveList = ({ cardInfo, listId }) => {
     dispatch(removeList({ cardInfo, listId }))

  }
  return (
    <>
      <div className={Style.container}>
        {cardInfo.title}
        <button onClick={() => navigation(cardInfo)}>
          <BsPencilSquare />
        </button>
        <button onClick={() => RemoveList({ cardInfo, listId })}><MdOutlineDelete /></button>
        
      </div>
      
    </>

  )
}

export default Card
