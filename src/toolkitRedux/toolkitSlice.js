//slice - это тот же reducer, но в другой обертке

import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState:{
        count: 0,
        todos: ['Снять видео', 'Смонтировать видео', 'Рассказать про toolkit'],
    },
    reducers: {
        increment(state){
            state.count = state.count + 1
// // в старом resucer(-e) выглядит вот так↓
//             return {...state, count: state.count + 1}
        },
        dicrement(state){
            state.count = state.count - 1
// // в старом resucer(-e) выглядит вот так↓
//             return {...state, count: state.count - 1}
        },
        addTodo(state, action){
            state.todos.push(action.payload)
// // в старом resucer(-e) выглядит вот так↓
//             return {...state, todos: [...state.todos, action.payload]}
        },
        removeLastTodo(state, action){
            // state.todos.pop()
            state.todos = state.todos.filter((_,id) => id !== action.payload)
// // в старом resucer(-e) выглядит вот так↓
//             return {...state, todos: [...state.todos.slice(0, state.todos.length-1)]}
        }
    }
})
export default toolkitSlice.reducer;
export const { increment, dicrement, addTodo, removeLastTodo } = toolkitSlice.actions