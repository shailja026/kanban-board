import React ,{useState} from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import List from "../Todo/List";
import AddSome from "../Navbar/addSome";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveCard, moveList } from "../../../store/listSlice";



function Main() {

  const dispatch = useDispatch();

  const listItem = useSelector((store) => store.listSlice);
  console.log("listItem", listItem);

  function handleDragDrop(results) {
    console.log("Hello there", results);

    const { source, destination, draggableId, type } = results;

    if (!destination) return;

    if (type === "group") {
      dispatch(
        moveList({
          sourceIndex: source.index,
          destinationIndex: destination.index,
          listId: draggableId,
        })
      );
    }

    if (type === "card") {
      dispatch(
        moveCard({
          sourceListId: source.droppableId,
          destinationListId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
          cardId: draggableId,
        })
      );
    }
  }
  
  return (
    <div style={{backgroundColor:"pink",height:"100vh"}}>
      <Navbar />
      <AddSome/>
      <DragDropContext onDragEnd={handleDragDrop}>
      <List />
      </DragDropContext>
    

    </div>
  );
}

export default Main;
