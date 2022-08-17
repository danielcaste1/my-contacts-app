import React from "react";

function Input({value, placeholder, type, category,onChange }){
    return(
        <input type= {type}
            value={value}
            placeholder= {placeholder}
            className = {`input input-${category}`}
            onChange={(event)=> {onChange(event.target.value)}}
        ></input>
    )
}

export { Input }