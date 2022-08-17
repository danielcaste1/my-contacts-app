import React, { useContext } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { AppContext } from "../Context/AppContext";

function ModalCard() {
  const {
    toggleModal,
    newContact,
    updateNewName,
    updateNewNumber,
    addNewContact,
    editingContact,
    contactModal,
    updateContactName, 
    updateContactNumber,
    updateContact,
    deleteContact
  } = useContext(AppContext);
  return (
    <div className="modal__card">
      {!editingContact && (
        <React.Fragment>
          <Button
            className="close-modal__button"
            shape="circle"
            type="deny"
            text= {<i class="fa-solid fa-x"></i>}
            onClick={() => {
              toggleModal();
            }}
          ></Button>
          <p className="modal__title">New Contact</p>
          <Input
            value={newContact.name}
            placeholder="Name..."
            type="text"
            onChange={updateNewName}
            category = "secondary"
          ></Input>
          <Input
            value={newContact.number}
            placeholder="Number..."
            type="number"
            onChange={updateNewNumber}
            category = "secondary"
          ></Input>
          <Button
            className="create-contact_button"
            shape="square"
            type="success"
            text="CREATE"
            onClick={addNewContact}
          ></Button>
        </React.Fragment>
      )}

      {editingContact && (
        <React.Fragment>
          <Button
            className="close-modal__button"
            shape="circle"
            type="deny"
            text= {<i class="fa-solid fa-x"></i>}
            onClick={() => {
              toggleModal();
            }}
          ></Button>
          <p className="modal__title">Contact Info</p>
          <Input
            value={contactModal[1].name}
            placeholder="Name..."
            type="text"
            onChange={updateContactName}
            category = "secondary"
          ></Input>
          <Input
            value={contactModal[1].number}
            placeholder="Number..."
            type="number"
            onChange={updateContactNumber}
            category = "secondary"
          ></Input>
          <div className="card_buttons">
            <Button
              className="delete-contact_button"
              shape="square"
              type="deny"
              text="DELETE"
              onClick={()=>{deleteContact()}}
            ></Button>
            <Button
              className="edit-contact_button"
              shape="square"
              type="success"
              text="SAVE"
              onClick={()=>{updateContact()}}
            ></Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export { ModalCard };
