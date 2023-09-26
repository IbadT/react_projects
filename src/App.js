import React, { useState } from "react";
import './App.css'
import Button from "./components/Button";
import Input from "./components/Input";
import ClearBtn from "./components/ClearBtn";
import { evaluate } from 'mathjs'

function App(){
  const [state, setState] = useState('')

  function addToInput(val){
    setState(state + val)
  }

  function handleEqual(){
    setState(evaluate(state))
  }

  return(
    <div className="app">
      <div className="calc-wrapper">
      <Input input={state}/>
      <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearBtn handleClick={() => setState('')}>Clear</ClearBtn>
        </div>
      </div>
    </div>
  )
}

export default App