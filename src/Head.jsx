import React from "react";
import logo from './logo.svg';
import './Head.css';

function Head(){
    return (
        <div className="headContainer">
            <h1 className="headText" style={{fontFamily: 'cursive', 
                        fontSize: '60px', 
                        fontWeight: 'bold',
                        // color: 'rgb(62, 255, 159)',
                        color: 'aqua',
                        textShadow: '3px 4px black'
                    }}
            >
                Todo App
            </h1>
            <img className="headLogo" src={logo} alt="logo"/>
        </div>
    )
}
export default Head