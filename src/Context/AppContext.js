import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props){
    const users = [
        {
            name : "John Doe",
            number : 3133435215
        },
        {
            name : "Daniel Sword",
            number : 3013500536
        },
        {
            name : "Joel Perez",
            number : 3108645612
        },
        {
            name : "Santiago Leon",
            number : 12312424124
        }
    ]
    const [contacts, setContacts] = useState(users);

    const filterContacts = (value)=>{
        if(value.length <= 0){
            setContacts(users);
        }else {
            const filteredContacts = contacts.filter(contact =>{
                const name = (contact.name).toString();
                const number = (contact.number).toString();
                if(name.includes(value) || number.includes(value)){
                    return contact
                }
            });
            setContacts(filteredContacts);
        }
        
        
    };

    const [newContact, setNewContact] = useState({name: "", number : ""});

    const updateNewName = (value)=>{
        setNewContact(prevNewContact => {
            return {name: value, number: prevNewContact.number}
        })
        console.log(newContact);
    }

    const updateNewNumber = (value)=>{
        setNewContact(prevNewContact => {
            return {name: prevNewContact.name, number: value}
        })
        console.log(newContact);
    }

    const addNewContact = ()=>{
        const newContacts = [newContact, ...contacts];
        setContacts(newContacts);
        toggleModal();
    }

    const [modalOpen, setModalOpen] = useState(false);   

    const toggleModal = ()=>{
        setModalOpen(preState => !preState)
    }




    return (
        <AppContext.Provider 
            value={{ contacts, filterContacts, modalOpen, toggleModal, newContact, updateNewName, updateNewNumber, addNewContact}}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};