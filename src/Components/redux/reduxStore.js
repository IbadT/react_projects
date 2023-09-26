import { combineReducers, createStore } from "redux";
import addPostReducer from "./addPostReducer";
import sendMessageReducer from "./sendMessageReducer";

let reducers = combineReducers({
    messagesPage : addPostReducer,
    sendMessage : sendMessageReducer
})

let store = createStore(reducers)

export default store;