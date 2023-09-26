import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
// import { DICREMENT, INCREMENT } from "./toolkitRedux/toolkitRedux";
import { increment, dicrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';
import './App.css';


// async
const addAsyncTodo = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(addTodo('Async Todo'))
        }, 2000)
    }
}

function Header(){
    const [stateOne, setStateOne] = useState(false);
    const [stateTwo, setStateTwo] = useState(false);
    return(
        <div className="head">
            <div>
                {/* <div onClick={() => setStateOne(!stateOne)}>My Friend</div>
                {stateOne && <ul><li>One</li><li>Two</li></ul>} */}
                <select onClick={() => setStateOne(!stateOne)}>
                    <option>One</option>
                    <option>Two</option>
                </select>
            </div>

            <div>
                <div onClick={() => setStateTwo(!stateTwo)}>Cities</div>
                {stateTwo && <ul><li>Minsk</li><li>Gomel</li></ul>}
            </div>
        </div>
    )
}


function App(){
    const count = useSelector(state => state.toolkit.count);
    const todos = useSelector(state => state.toolkit.todos)
    const dispatch = useDispatch();
    return(
        <div>

            <Header />

            <h1>Count: {count}</h1>
            {/* <button onClick={() => dispatch(INCREMENT())}>INCREMENT</button>
            <button onClick={() => dispatch(DICREMENT())}>DICREMENT</button> */}
            

            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(dicrement())}>DICREMENT</button>
            <button onClick={() => dispatch(removeLastTodo())}>Delete last todo</button>
            <button onClick={() => dispatch(addTodo(prompt()))}>Add todo</button>

            <button onClick={() => dispatch(addAsyncTodo())}>Async</button>
            <ul>
                {todos.map((i,id) => <div key={id} onClick={() => dispatch(removeLastTodo(id))}>{ i }</div>)}
            </ul>
        </div>
    )
}

export default App;