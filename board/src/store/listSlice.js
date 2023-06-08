import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: [],
        
    },
    reducers: {
        addList: (state, action) => {
            if(state.list){
                state.list.push(action.payload)
            }
           
            // console.log("action:", action)
        },
        addCard: (state,action) => {
            console.log(state.list)
            // console.log("action", action, state.list)
            state.list.forEach((item) => {
                if(item.id === action.payload.parentId){
                    if(Object.hasOwn(item, "children")){
                        item.children.push(action.payload);
                        console.log(item.children)
                    }
                    else{
                        item.children = [];
                        item.children.push(action.payload);
                        console.log(item.children)
                    }
                }
            })
        },
        update : (state,action)=>{
            console.log(action.payload)
        //     const {id } = action.payload;
        //     const index = state.list.findIndex(item => item.id = id);
        //    if(index!==-1){
        //     state.list[index].title = ""
        //    }
        
           
        },
        removeList : (state , action) => {
          
           
          const {cardInfo , listId} = action.payload
          console.log(cardInfo , listId);
          const todo = state.list.find((list) => list.id === action.payload.listId);
          console.log(todo)
          if(todo){
         todo.children=todo.children.filter((el) => el.id !== cardInfo.id);
          }
           

        }
    }
});

export const {addList} = listSlice.actions;
export const {addCard} = listSlice.actions;
export const {update} = listSlice.actions;
export const {removeList} = listSlice.actions
export default listSlice.reducer