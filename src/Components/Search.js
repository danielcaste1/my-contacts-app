import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Input } from "./Input";
import { Button } from "./Button"

function Search(){
    const { setSearchValue, openNewContactModal } = useContext(AppContext);
    return (
        <div className="search__container">
            <Input
                placeholder = "Search..."
                onChange={(value)=> {
                    setSearchValue(value);}}
                type ="text"
                category = "main"
            ></Input>
            <Button
                className= "add-contact__button"
                text = "+"
                type= "main"
                shape= "circle"
                onClick={openNewContactModal}
            ></Button>
        </div>
    )
}

export { Search }