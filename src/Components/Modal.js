import { ReactDOM } from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  return createPortal(
    <div className="modal-background">{props.children}</div>,
    document.querySelector("#modal")
  );
}

export { Modal };
