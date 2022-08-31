import React from "react";

function ContactList({
  displayedContacts,
  searchValue,
  onEmptyResults,
  render,
}) {
  return <div className="contact__list">
    {(!displayedContacts.length && !searchValue.length) && onEmptyResults("Agrega tu primer contacto") }
    {(!displayedContacts.length && !!searchValue.length) && onEmptyResults("No hay resultados para tu busqueda") }
    {(displayedContacts) && displayedContacts.map(render) }
  </div>;
}

export { ContactList };
