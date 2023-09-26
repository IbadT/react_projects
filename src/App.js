import React, { useState, lazy, Suspense } from "react";
import { questions } from './questions';
import logo from './logo.svg';
import './App.css'


function Spin(){
  return <img src={logo} className="App-logo" alt="logo" /> 
}


const MyLazyComponent = lazy(() => import('./MyLazyComponent'))

function App(){
  const [state, setState] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState(0);

  function handleSorted(a,b){
    return Math.random() - 0.5;
  }

  function handleClick( boolVal ){
    if(state+1 < questions.length){
      setState(prev => prev+1)
    }else{
      setShowResult(prev => !prev)
    }
    if(boolVal === true){
      setResult(prev => prev+1)
    }
  }

  questions.map(i => i.questionsValue.sort(handleSorted))

  return(
    <div className="App">
      {
        showResult ? 
        <Suspense fallback={<Spin />}>
            <MyLazyComponent result={result} len={questions.length}/>  
        </Suspense>
          // <><div>You Result is {result} out of {questions.length}</div></>
        :
        <>
          <div>
            <div>Questions {state+1}/{questions.length}</div>
            <div>{questions[state].questionsText}?</div>
          </div>
          <div>
            {questions[state].questionsValue
              .map(i => 
                <div key={ i.id }onClick={() => handleClick( i.isCompleted )}>
                  { i.answerText }
                </div>
              )
            }
          </div>
        </>
      }
    </div>
  )
}

export default App;