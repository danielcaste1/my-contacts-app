import React, { Fragment, useContext } from "react";
import { Search } from "./Search";
import { Button } from "./Button";
import { Input } from "./Input";
import { ContactCard } from "./ContactCard";
import { ContactList } from "./ContactList";
import { Modal } from "./Modal";
import { ModalCard } from "./ModalCard";
import { EmptyList } from "./EmptyList"
import { useContactsContext } from "../Context/AppContext";

function AppUI() {
  const {
    modalOpen,
    setSearchValue,
    openNewContactModal,
    displayedContacts,
    searchValue,
    openEditingContactModal,
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
    deleteContact,
  } = useContactsContext();
  return (
    <Fragment>
      <h1 className="app__title">My Contacts</h1>

      <Search>
        <Input
          placeholder="Search..."
          onChange={(value) => {
            setSearchValue(value);
          }}
          type="text"
          category="main"
        ></Input>
        <Button
          className="add-contact__button"
          text="+"
          type="main"
          shape="circle"
          onClick={openNewContactModal}
        ></Button>
      </Search>
      
      <ContactList
        displayedContacts = { displayedContacts }
        searchValue = { searchValue }
        onEmptyResults = { (error) => <EmptyList error={error}></EmptyList> }
        render = {(contact) => {
            return (
              <ContactCard
                key={displayedContacts.indexOf(contact)}
                key_index={displayedContacts.indexOf(contact)}
                name={contact.name}
                number={contact.number}
                onClick={openEditingContactModal}
              ></ContactCard>
            );
          } }
      >

      </ContactList>

      {!!modalOpen && (
        <Modal>
          <ModalCard>
            {!editingContact && (
              <React.Fragment>
                <Button
                  className="close-modal__button"
                  shape="circle"
                  type="deny"
                  text={<i className="fa-solid fa-x"></i>}
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
                  category="secondary"
                ></Input>
                <Input
                  value={newContact.number}
                  placeholder="Number..."
                  type="number"
                  onChange={updateNewNumber}
                  category="secondary"
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
                  text={<i className="fa-solid fa-x"></i>}
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
                  category="secondary"
                ></Input>
                <Input
                  value={contactModal[1].number}
                  placeholder="Number..."
                  type="number"
                  onChange={updateContactNumber}
                  category="secondary"
                ></Input>
                <div className="card_buttons">
                  <Button
                    className="delete-contact_button"
                    shape="square"
                    type="deny"
                    text="DELETE"
                    onClick={() => {
                      deleteContact();
                    }}
                  ></Button>
                  <Button
                    className="edit-contact_button"
                    shape="square"
                    type="success"
                    text="SAVE"
                    onClick={() => {
                      updateContact();
                    }}
                  ></Button>
                </div>
              </React.Fragment>
            )}
          </ModalCard>
        </Modal>
      )}
    </Fragment>
  );
}

export { AppUI };
