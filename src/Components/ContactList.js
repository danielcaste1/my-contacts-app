import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { ContactCard } from "./ContactCard";

function ContactList() {
  const { displayedContacts, searchValue, openEditingContactModal } = useContext(AppContext);
  return (
    <div className="contact__list">
      {displayedContacts.length >= 1 &&
        displayedContacts.map((contact) => {
          return (
            <ContactCard
              key={displayedContacts.indexOf(contact)}
              key_index={displayedContacts.indexOf(contact)}
              name={contact.name}
              number={contact.number}
              onClick={openEditingContactModal}
            ></ContactCard>
          );
        })}
      {displayedContacts.length <= 0 && searchValue.length <= 0 &&(
        <React.Fragment>
          <p className="no-contacts">
            You have any contact yet! Press the + icon to add your first contact.
          </p>
        </React.Fragment>
      )}
      {displayedContacts.length <= 0 && searchValue.length >= 1 && (
        <React.Fragment>
          <p className="no-contacts">
            Sorry! We could't find any results for your search.
          </p>
          <i className="fa-solid fa-face-frown"></i>
        </React.Fragment>
      )}
    </div>
  );
}

export { ContactList };
