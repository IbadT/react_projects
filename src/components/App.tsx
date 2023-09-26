import React, { useState } from 'react';
import InputTasks from './InputTasks';
import TodoList from './TodoList';
import { Itodo } from '../types/types';



// const App: React.FC = () => {
function App(): JSX.Element{
  const [value, setValue] = useState('');
  const [state, setState] = useState<Itodo[]>([]);

  
  function addTask(): void{
    let newTask = {
      id: state.length > 0 ? state[0].id + 1 : 0,
      task: value,
      isCompleted: false
    }
    setState([ newTask, ...state ])
    setValue('')
  }

  return (
    <div>
      <h1>Todo List For TypeScript</h1>

      <div>
        <InputTasks value={value} setValue={setValue} addTask={addTask} />
        <button onClick={() => addTask()}>Click</button>
        <TodoList state={state} setState={setState}/>
      </div>

    </div>
  );
}

export default App;
