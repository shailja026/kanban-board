import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: [],
        cardObj: {},
        disCriSave : [],

    },
    reducers: {
        addList: (state, action) => {
            if (state.list) {
                state.list.push(action.payload)
            }

            // console.log("action:", action)
        },
        addCard: (state, action) => {
            console.log(state.list)
            // console.log("action", action, state.list)
            state.list.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (Object.hasOwn(item, "children")) {
                        item.children.push(action.payload);
                        console.log(item.children)
                    }
                    else {
                        item.children = [];
                        item.children.push(action.payload);
                        console.log(item.children)
                    }
                }
            })
        },
        update: (state, action) => {
            console.log(action.payload)
            const { id, text } = action.payload;
            const index = state.list.findIndex(item => item.id === id);
            if (index !== -1) {
                state.list[index].title = text
            }


        },
        removeList: (state, action) => {
            const { cardInfo, listId } = action.payload
            console.log(cardInfo, listId);
            const todo = state.list.find((list) => list.id === action.payload.listId);
            console.log(todo)
            if (todo) {
                todo.children = todo.children.filter((el) => el.id !== cardInfo.id);
            }
        },

        setCardObject: (state, action) => {
            state.cardObj = action.payload

        },
        disCription : (state , action) => {
            //console.log(action.payload)
            // state.disCriSave.push( action.payload)
            const {text} = action.payload
            
            console.log(action.payload)
        }
    }
});

export const { addList,addCard ,update , removeList , navigateToDiscription , setCardObject,disCription } = listSlice.actions;

export default listSlice.reducer