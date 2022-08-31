import React from "react";

function ModalCard(props) {

  return (
    <div className="modal__card">
      {props.children}
    </div>
  );
}

export { ModalCard };
