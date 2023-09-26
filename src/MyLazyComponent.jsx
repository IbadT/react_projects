import React from "react";


function MyLazyComponent({result, len}){
    return(
        <div>
            <><div>You Result is {result} out of {len}</div></>
        </div>
    )
}
export default MyLazyComponent;