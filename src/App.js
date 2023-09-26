import React, { useState } from 'react';
import './App.css';
import { persons } from './persons.js'

function App() {
  const [state, setState] = useState('')
  return (
    <div className="App">
      <input 
        value={state}
        onChange={e => setState(e.target.value)}
        placeholder='Search...'
      />
      
      {/* {persons.filter(i => state === '' ? i : i.name.toLowerCase().includes(state.toLowerCase()) ? i : null) */}
      {persons.filter(i => {
        // if(state === ''){
        //   return i
        // }else if(i.name.toLowerCase().includes(state.toLowerCase())){
        //   return i
        // }return null

        // if(i.name.toLowerCase().includes(state.toLowerCase())){
        if(i.name.toLowerCase().startsWith(state.toLowerCase())){
          return i
        }return null
      })
        .map(i => {
            return <div key={ i.id }>{ i.name }</div>
      })}
    </div>
  );
}

export default App;
