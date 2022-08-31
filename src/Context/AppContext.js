import React, { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function useContactsContext(props) {
  const [contacts, setContacts] = useLocalStorage("contactList");

  const [searchValue, setSearchValue] = useState("");

  let displayedContacts;
  if (searchValue.length <= 0) {
    displayedContacts = contacts;
  } else {
    displayedContacts = contacts.filter((contact) => {
      const name = contact.name.toString();
      const number = contact.number.toString();
      if (name.includes(searchValue) || number.includes(searchValue)) {
        return contact;
      }
    });
  }
  displayedContacts.sort((a, b) => {
    const nameA = a.name.toString();
    const nameB = b.name.toString();
    return nameA.localeCompare(nameB);
  });

  const [newContact, setNewContact] = useState({ name: "", number: "" });

  const updateNewName = (value) => {
    setNewContact((prevNewContact) => {
      return { name: value, number: prevNewContact.number };
    });
  };

  const updateNewNumber = (value) => {
    setNewContact((prevNewContact) => {
      return { name: prevNewContact.name, number: value };
    });
  };

  const addNewContact = () => {
    const newContacts = [newContact, ...contacts];
    setContacts(newContacts);
    toggleModal();
    setNewContact({ name: "", number: "" });
  };
  const openNewContactModal = () => {
    setEditingContact(false);
    toggleModal();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((preState) => !preState);
  };

  const [editingContact, setEditingContact] = useState(false);

  const openEditingContactModal = (index) => {
    const contactModal = contacts[index];
    setContactModal([index, contactModal]);
    setEditingContact(true);
    toggleModal();
  };

  const [contactModal, setContactModal] = useState([]);

  const updateContactName = (value) => {
    setContactModal((prevValue) => {
      return [prevValue[0], { name: value, number: prevValue[1].number }];
    });
  };

  const updateContactNumber = (value) => {
    setContactModal((prevValue) => {
      return [prevValue[0], { name: prevValue[1].name, number: value }];
    });
  };

  const updateContact = () => {
    const newContacts = [...contacts];
    newContacts[contactModal[0]] = contactModal[1];
    setContacts(newContacts);
    toggleModal();
  };

  const deleteContact = () => {
    const newContacts = [...contacts];
    newContacts.splice(contactModal[0], 1);
    setContacts(newContacts);
    toggleModal();
  };

  return {
    displayedContacts,
    searchValue,
    setSearchValue,
    modalOpen,
    toggleModal,
    newContact,
    updateNewName,
    updateNewNumber,
    addNewContact,
    openNewContactModal,
    editingContact,
    openEditingContactModal,
    contactModal,
    updateContactName,
    updateContactNumber,
    updateContact,
    deleteContact,
  };
}

export { useContactsContext };
