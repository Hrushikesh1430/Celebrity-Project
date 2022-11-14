import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditItem from "./EditItem";
import CalculateAge from "./CalculateAge";
const Accordion = (props) => {
  const capitalize = (string) => {
    let temp = string.charAt(0).toUpperCase() + string.slice(1);
    return temp;
  };
  var temp_age = null;
  return (
    <React.Fragment>
      {props.item.map((items, i) => (
        <div className="card mx-auto mt-4" key={items.id}>
          <div className="card-body">
            {/* {CalculateAge(items.dob) > 18 ? "true" : "false"} */}
            {props.EditVal === i && CalculateAge(items.dob) > 18 ? (
              <EditItem
                user={items}
                EditToggle={props.EditCheck}
                onEditItem={props.EditHandler}
              ></EditItem>
            ) : (
              <div className="card-title">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="picture"
                      src={items.picture}
                      alt={"hey"}
                    ></img>
                  </div>
                  <div className="col-4 mt-3">
                    <div className="main-title">
                      {items.first + " " + items.last}
                    </div>
                  </div>

                  <div className="col-4">
                    <button
                      className="btn"
                      style={{ float: "right" }}
                      onClick={() => props.toggleshow(i)}
                    >
                      {props.opencheck === i ? "-" : "+"}
                    </button>
                  </div>
                  {props.opencheck === i ? (
                    <div className="card-text mt-3">
                      <div className="row ">
                        <div className="col-4">
                          <span className="title-descrip">Age </span>
                          <br />
                          <p className="title-content">
                            {CalculateAge(items.dob)} Years
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="title-descrip">Gender</span> <br />
                          <p className="title-content">
                            {capitalize(items.gender)}
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="title-descrip">Country</span> <br />
                          <p className="title-content">{items.country}</p>
                        </div>
                      </div>
                      <span className="title-descrip">Description</span>
                      <br />

                      <p className="title-content mt-2">{items.description}</p>
                      <div className="icons" style={{ float: "right" }}>
                        <div style={{ display: "inline-block" }}>
                          <button
                            className="btn"
                            onClick={() => props.openDeleteModal(items.id)}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ color: "red" }}
                            />
                          </button>
                        </div>
                        <div style={{ display: "inline-block" }}>
                          <button className="btn">
                            <FontAwesomeIcon
                              icon={faEdit}
                              style={{ color: "green" }}
                              onClick={() => props.EditCheck(i)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </React.Fragment>

    // <div className="accordion">
    //   <div className="accordion-item">
    //     <div className="accordion-title" onClick={() => showcard(props.index)}>
    //       <div>{props.data.first + " " + props.data.last}</div>
    //       <div>{isOpened === ischeck ? "-" : "+"}</div>
    //     </div>
    //     {/* {isOpened && (
    //       <div className="accordion-content">{props.data.description}</div>
    //     )} */}
    //   </div>
    // </div>
  );
};

export default Accordion;
