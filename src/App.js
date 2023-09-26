import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, inputAll, inputDone } from './store/toolkitSlice';
import TextValue from './TextValue';
import { Col, Row, Tooltip, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';


function App() {
  const todo = useSelector(state => state.toolkit);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [test, setTest] = useState('');

  function handleAdd(){

    const current = {
      id: todo.length>0 ? todo[0].id+1 : 0,
      text: value[0].toUpperCase() + value.slice(1),
      isCompleted: false
    }
    
    dispatch(addTodo(current))
    setValue('')
  }

  function handleKeyPress(e){
    if(e.key === 'Enter'){
      handleAdd();
    }
  }

  function allTasks(){
    let res = test.filter(i => i.isCompleted === true)
    return res
  }

  function doneTasks(){
    // setTest(todo);
    console.log(test)
    // let res = test.filter(i => i.isCompleted === true)
    // console.log(res)
    // return res
  }
  
  return (
      <div className="App">
        <Row>

          <Col>
            <Button onClick={() => dispatch(allTasks())}>All</Button>
          </Col>

          <Col>
            <Button onClick={() => dispatch(doneTasks())}>Done</Button>
          </Col>

          <Col>
            <Button onClick={() => dispatch(inputDone())}>Uncompleteds</Button>
          </Col>

        </Row>

        <Row>
          <Col span={21}>
            <input
                style={{ paddingLeft: '20px', width: '100%', margin: '0 10px 20px 0', borderRadius: '7px'}}
                placeholder='Add Todo...'
                onKeyPress={e => handleKeyPress(e)} 
                onChange={(e) => setValue(e.target.value)} 
                value={value}
            />
          </Col>

          <Col span={1} offset={1}>
            <Tooltip title="Send">
              <Button className='reverseBtn' onClick={() => handleAdd()} type="primary" shape="circle" icon={<SendOutlined className='rev'/>} />
            </Tooltip>
          </Col>

        </Row>
        <Row>
          <Col span={24}>
            <TextValue dispatch={dispatch} todo={todo}/>
          </Col>
        </Row>
        {todo.length }
      </div>
  );
}

export default App;
