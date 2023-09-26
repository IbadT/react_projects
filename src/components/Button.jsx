import React from "react";
import './Button.css'

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === '='
}

function Button({ handleClick, children }){
    return(
        <div onClick={() => handleClick(children)} className={`button-wrapper ${isOperator(children) ? null : 'operator'}`}>
            {children}
        </div>
    )
}

export default Button;