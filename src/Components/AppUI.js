import React, { Fragment, useContext } from "react";
import { Search } from "./Search";
import { ContactList } from "./ContactList";
import { Modal } from "./Modal"
import { ModalCard } from "./ModalCard";
import { AppContext } from "../Context/AppContext";


function AppUI() {
  const { modalOpen } = useContext(AppContext)
  return (
    <Fragment>
      <h1 className="app__title">My Contacts</h1>
      <Search></Search>
      <ContactList></ContactList>
      {!!modalOpen && (
        <Modal>
        <ModalCard></ModalCard>
      </Modal>
      )}
    </Fragment>
  );
}

export { AppUI };
