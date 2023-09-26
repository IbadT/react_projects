import React from "react";
import './ClearBtn.css'

function ClearBtn({ handleClick, children }){
    return(
        <div className="clear-btn" onClick={handleClick}>
            {children}
        </div>
    )
}

export default ClearBtn;