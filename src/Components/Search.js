import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { TextInput } from "./TextInput";
import { Button } from "./Button"

function Search(){
    const { filterContacts, toggleModal } = useContext(AppContext);
    return (
        <div className="search__container">
            <TextInput
            placeholder = "Search..."
            onChange={filterContacts}
            type ="main"
            ></TextInput>
            <Button
            className= "add-contact__button"
            text = "+"
            type= "main"
            shape= "circle"
            onClick={()=> {toggleModal()}}
            ></Button>
        </div>
    )
}

export { Search }