import React from "react";
import { useState } from "react";
import records from "./data/celebrities.json";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";

const App = () => {
  const [recordlist, ischangerecord] = useState(records);
  const [isOpened, setIsOpened] = useState(null);
  const [deletecheck, setIsDeletecheck] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setisEdit] = useState(null);

  const editcard = (i) => {
    if (isEdit === i) {
      return setisEdit(null);
    }
    setisEdit(i);
  };
  const showcard = (i) => {
    if (isOpened === i) {
      return setIsOpened(null);
    }
    setIsOpened(i);
  };

  const openModal = (id) => {
    setIsDeletecheck(id);
    setIsDelete(true);
  };
  const saveEditData = (element) => {
    console.log(element);
    ischangerecord(
      recordlist.map((obj) => {
        if (obj.id === element.id) {
          return element;
        }
        return obj;
      })
    );
  };
  const deleteItem = (id) => {
    setIsOpened(null);
    setIsDelete(false);
    ischangerecord((oldrecord) => {
      return oldrecord.filter((arrElem) => {
        return arrElem.id !== id;
      });
    });
  };
  const reset = () => {
    setIsDelete(false);
  };
  return (
    <React.Fragment>
      {isDelete && (
        <Modal
          closeModal={reset}
          selected={deletecheck}
          items={records}
          onSelect={deleteItem}
        />
      )}
      <h2 className="text-center p-4">List View</h2>
      <Accordion
        item={recordlist}
        toggleshow={showcard}
        opencheck={isOpened}
        openDeleteModal={openModal}
        EditCheck={editcard}
        EditVal={isEdit}
        EditHandler={saveEditData}
      ></Accordion>
    </React.Fragment>
  );
};

export default App;
