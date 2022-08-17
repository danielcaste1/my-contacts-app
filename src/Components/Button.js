import React from "react";

function Button ({className, shape, type, text, onClick}){
    return (
        <button 
        className={ `${className} btn btn_${type} ${shape}` } 
        type="button"
        onClick={onClick}
        >{text}</button>
    )
}


export { Button }