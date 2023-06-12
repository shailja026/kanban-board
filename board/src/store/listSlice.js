import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
    cardObj: {},
    disCriSave: [],
    isChangeBgValue: false,
	colorOption : false,
	imageOption : false,
  },
  reducers: {
    addList: (state, action) => {
      if (state.list) {
        state.list.push(action.payload);
      }

      // console.log("action:", action)
    },
    addCard: (state, action) => {
      console.log(state.list);
      // console.log("action", action, state.list)
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
            console.log(item.children);
          } else {
            item.children = [];
            item.children.push(action.payload);
            console.log(item.children);
          }
        }
      });
    },
    update: (state, action) => {
      console.log(action.payload);
      const { id, text } = action.payload;
      const index = state.list.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.list[index].title = text;
      }
    },
    removeList: (state, action) => {
      const { cardInfo, listId } = action.payload;
      console.log(cardInfo, listId);
      const todo = state.list.find((list) => list.id === action.payload.listId);
      console.log(todo);
      if (todo) {
        todo.children = todo.children.filter((el) => el.id !== cardInfo.id);
      }
    },

    setCardObject: (state, action) => {
      state.cardObj = action.payload;
    },
    disCription: (state, action) => {
        const { id, text } = action.payload;
      const index = state.list.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.list[index].title = text;
	  }
    },
    changeBackgraound: (state, action) => {
      state.isChangeBgValue = action.payload;
    },
	moveList:(state, action)=>{
        const {sourceIndex, destinationIndex, listId} = action.payload;
          
        // Remove the list from the source index
        const listData = state.list.splice(sourceIndex, 1)[0];
        
        // Insert the listData into the destination index
        state.list.splice(destinationIndex, 0, listData);
    },

    moveCard:(state, action)=>{
        const { sourceListId, destinationListId, sourceIndex, destinationIndex, cardId } = action.payload;

        // Find the source and destination lists
        const sourceList = state.list.find((list)=> list.id === sourceListId);
        const destinationList = state.list.find((list)=> list.id === destinationListId)

         // Remove the card from the source list
      const card = sourceList.children.splice(sourceIndex, 1)[0];

       // Insert the card into the destination list
       destinationList.children.splice(destinationIndex, 0, card);
    },
    setColorOption : (state , action) => {
		state.colorOption = action.payload
	},
	setImageOption : (state , action) => {
		state.colorOption = action.payload
	},
  },
});

export const {
  addList,
  addCard,
  update,
  removeList,
  navigateToDiscription,
  setCardObject,
  disCription,
  changeBackgraound,
  moveCard,
  moveList,
  setColorOption,
  setImageOption
} = listSlice.actions;

export default listSlice.reducer;
