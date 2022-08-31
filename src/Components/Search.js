import React from "react";

function Search(props){
    return (
        <div className="search__container">
            {props.children}
        </div>
    )
}

export { Search }