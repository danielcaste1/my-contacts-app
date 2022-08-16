import React, { useContext } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { AppContext } from "../Context/AppContext";

function ModalCard(){
    const { toggleModal, newContact, updateNewName, updateNewNumber,addNewContact } = useContext(AppContext);
    return(
        <div className="modal__card">
            <Button
                className= "close-modal__button"
                shape="circle"
                type="deny"
                text= "x"
                onClick={()=>{ toggleModal() }}
            ></Button>
            <p 
                className="modal__title">New Contact</p>
            <TextInput
                value = {newContact.name}
                placeholder="Name..."
                type= "secondary"
                onChange = {updateNewName}
            ></TextInput>
            <TextInput
                value = {newContact.number}
                placeholder="Number..."
                type= "secondary"
                onChange = {updateNewNumber}
            ></TextInput>
            <Button
                className= "create-contact_button"
                shape= "square"
                type= "success"
                text= "CREATE"
                onClick={addNewContact}
            ></Button>
        </div>
    )
}

export { ModalCard }