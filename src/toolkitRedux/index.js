import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import toolkitRedux from "./toolkitRedux";
import toolkitSlice from "./toolkitSlice";

// без createSlice
// const rootReducer = combineReducers({
//     toolkit: toolkitRedux
// })


// c createSlice
const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
})