import { Space } from "antd";
import React from "react";
import { changeCompleted, deleteValue } from './store/toolkitSlice';
import { CheckCircleTwoTone, SyncOutlined, DeleteFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import './TextValue.css';


function TextValue({dispatch, todo}){    
    return(
        <div className="containerText" style={{textAlign: 'center'}}>
            
                {todo.length>0 ? todo.map(i =>             
                    <div className="text" style={{textDecoration: i.isCompleted ? 'line-through' : 'none'}} 
                                onClick={() => dispatch(changeCompleted(i.id))} 
                                key={ i.id }>

                        <Row>
                            <Col span={1} offset={0}>
                                <Space style={{fontSize: '20px'}}>
                                    {i.isCompleted ? <CheckCircleTwoTone twoToneColor="rgb(10, 255, 10)" /> : <SyncOutlined spin />}
                                </Space>
                            </Col>
                            
                            <Col className="text" 
                                        style={{ 
                                        paddingLeft: '10px',
                                        fontSize: '20px',
                                        textAlign: 'start',
                                        color: i.isCompleted ? 'rgb(21, 255, 0)' : 'black', 
                                        borderBottom: '1px solid black', 
                                        textDecorationColor: i.isCompleted ? 'red' : 'black'}} 
                                        span={22} offset={0}>
                                { i.text }
                            </Col>
                
                            <Col span={1} offset={0}>
                                <DeleteFilled className="removebtn" onClick={() => dispatch(deleteValue(i.id))}>
                                    Change
                                </DeleteFilled>
                            </Col>  
                        </Row>

                    </div>) : 'Empty list...'
                }

        </div>
    )
}
export default TextValue;

{/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}