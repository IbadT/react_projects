import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        text: 'First',
        isCompleted: false
    },
    {
        id: 0,
        text: 'Second',
        isCompleted: false
    },
]

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        addTodo(state, action){
            state.unshift(action.payload)
        },
        changeCompleted(state, aciton){
            state = state.map(i => i.id === aciton.payload ? {...i, isCompleted: !i.isCompleted} : i) 
            return state
        },
        deleteValue(state, aciton){
            // state = state.filter(i => i.id !== aciton.payload)
            // return state
            return state.filter(i => i.id !== aciton.payload)
        },
        inputAll(state){
            return state.forEach(i => i.isCompleted===true && i.isCompleted===false)
        },
        inputDone(state){
            let res = state.filter(i => i.isCompleted === true)
            // state = state.forEach(i => i.isCompleted === true)
            return res
        }
    }
})

export default toolkitSlice.reducer;
export const { addTodo, changeCompleted, deleteValue, inputAll, inputDone } = toolkitSlice.actions;