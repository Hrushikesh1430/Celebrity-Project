import React from "react";
const Modal = (props) => {
  return (
    <React.Fragment>
      <div className="modalBackground"></div>
      <div className="card modalContainer p-5">
        <div className="content">
          <p className="main-title" style={{ display: "inline-block" }}>
            Are you sure you want to delete?
          </p>
          <button
            onClick={props.closeModal}
            className="btn main-title"
            style={{
              float: "right",
              position: "relative",
              top: "-40px",
              left: "30px",
            }}
          >
            X
          </button>
        </div>
        <footer className="actions">
          <div className="control-buttons" style={{ float: "right" }}>
            <button className="btn ml-3 pl-3" onClick={props.closeModal}>
              Cancel
            </button>
            <button
              className="btn delete"
              onClick={() => props.onSelect(props.selected)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Modal;
