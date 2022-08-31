import React, { Fragment } from "react";

function EmptyList({ error }) {
  return (
    <Fragment>
      <p className="no-contacts">
        { error }
      </p>
      <i className="fa-solid fa-face-frown"></i>
    </Fragment>
  );
}

export { EmptyList }