import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { actionADD, actionREM, actionCHANGE } from './redux/rootReducers';



function App() {
  const dispatch = useDispatch();
  const store = useSelector(state => state.tasks)
  const [state, setState] = useState('')

  function addTask(){
    let obj = {
      id: store.length>0 ? store[0].id+1 : 0,
      task: state,
      isCompleted: false
    }
    setTimeout(() => {
      dispatch(actionADD(obj))
      setState('')
    },500)
  }

  function change(i){
    // dispatch(actionCHANGE(i))
    dispatch(actionREM(i))
  }

  return(
    <div>
      <input onChange={(e) => setState(e.target.value)} placeholder='Input task...' value={state}/>
      <button onClick={() => addTask()}>Click</button>
      {store.length>0 ? store.map(i => <div style={{textDecoration: i.isCompleted ? 'line-through' : 'none'}} onClick={() => change(i)} key={ i.id }>{ i.task }</div>)
        : 'Empty tasks'
      }
    </div>
  )
}

export default App;
