import React, {useContext} from "react";
import { AppContext } from "../Context/AppContext";
import { ContactCard } from "./ContactCard";

function ContactList(){
    const { contacts } = useContext(AppContext);
    return (
        <div className="contact__list">
            {contacts.map(contact => {
                return (
                    <ContactCard
                    key={contacts.indexOf(contact)}
                    name={contact.name}
                    number = {contact.number}
                    ></ContactCard>
                )
            })}
        </div>
    )
}

export { ContactList }