import React from "react";

function TextInput({value, placeholder, type, onChange }){
    return(
        <input type="text"
            value={value}
            placeholder= {placeholder}
            className = {`input input-${type}`}
            onChange={(event)=> {onChange(event.target.value)}}
        ></input>
    )
}

export { TextInput }