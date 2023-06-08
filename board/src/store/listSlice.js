import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: [],
        
    },
    reducers: {
        addList: (state, action) => {
            state.list.push(action.payload)
            // console.log("action:", action)
        },
        addCard: (state,action) => {
            // console.log("action", action, state.list)
            state.list.forEach((item) => {
                if(item.id === action.payload.parentId){
                    if(Object.hasOwn(item, "children")){
                        item.children.push(action.payload)
                    }
                    else{
                        item.children = [];
                        item.children.push(action.payload)
                    }
                }
            })
        },
        update : (state,action)=>{
        //     editColumnTitle(state, action) {
        //         const { index, newName } = action.payload;
        //         state[index].title = newName;
        //       },
      
           
        },
        removeList : (state , action) => {
          
            state.list.forEach((item)=>{
                if(item.id === action.payload.id){
                   console.log((item))
                   
                }
            })
             console.log(action.payload.cardInfo)
   
            //state.list.forEach((item,ind)=> console.log(item))
    

        }
    }
});

export const {addList} = listSlice.actions;
export const {addCard} = listSlice.actions;
export const {update} = listSlice.actions;
export const {removeList} = listSlice.actions
export default listSlice.reducer