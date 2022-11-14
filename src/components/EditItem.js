import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import CalculateAge from "./CalculateAge";

const EditItem = (props) => {
  const [iscountry, setCountry] = useState(props.user.country);
  const [descrip, setDescrip] = useState(props.user.description);
  const [isgender, setGender] = useState(props.user.gender);
  const [countryState, setCountryState] = useState(true);
  const [descripState, setDescripState] = useState(true);
  const [buttonToggle, setButtonToggle] = useState(false);
  // const [isValid, setIsValid] = useState(true);
  const [updatedData, setUpdatedData] = useState(props.user);
  const letters = /^[a-zA-Z]*$/;
  const numbers = /^[0-9]+$/;
  const countryHandler = (event) => {
    // if (!event.target.value.match(letters)) {
    //   setIsValid(false);
    //   return;
    // }
    setButtonToggle(true);
    setCountry(event.target.value);
  };
  const descripHandler = (event) => {
    setButtonToggle(true);
    setDescrip(event.target.value);
  };
  const genderHandler = (event) => {
    setButtonToggle(true);
    setGender(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    var temp_country = iscountry.split(" ").join("");
    if (!temp_country.match(letters) || temp_country.length === 0) {
      console.log("hey");
      setCountryState(false);
      return;
    }
    if (descrip.trim().length === 0) {
      setDescripState(false);
      return;
    }
    setCountryState(true);
    setDescripState(true);
    setUpdatedData(
      (updatedData.country = iscountry),
      (updatedData.gender = isgender),
      (updatedData.description = descrip)
    );
    props.onEditItem(updatedData);
    props.EditToggle(false);
  };
  return (
    <React.Fragment>
      <div className="card-title">
        <div className="row">
          <div className="col-4">
            <img className="picture" src={props.user.picture} alt={"hey"}></img>
          </div>
          <div className="col-4 mt-3">
            <div className="main-title">
              {props.user.first + " " + props.user.last}
            </div>
          </div>

          <div className="col-4">
            <button className="btn" style={{ float: "right" }}>
              -
            </button>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="card-text mt-3">
          <div className="row ">
            <div className="col-4">
              <span className="title-descrip">Age</span>

              <br />
              <p className="title-content">
                {CalculateAge(props.user.dob)} Years
              </p>
            </div>
            <div className="col-4">
              <span className="title-descrip">Gender</span>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={genderHandler}
              >
                <option value={props.user.gender}>{props.user.gender}</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="rather not say">Rather not say</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-4">
              <label className="title-descrip">Country</label>
              <input
                type="text"
                className={`form-control ${!countryState ? "error" : ""}`}
                value={iscountry}
                onChange={countryHandler}
              ></input>
            </div>
          </div>
          <label className="title-descrip">Description</label>
          <textarea
            className={`form-control ${!descripState ? "error" : ""}`}
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={descripHandler}
            value={descrip}
          ></textarea>

          <p className="title-content mt-2"></p>
          <div className="icons" style={{ float: "right" }}>
            <div style={{ display: "inline-block" }}>
              <button className="btn" onClick={() => props.EditToggle(false)}>
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    padding: "4px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    color: "red",
                    borderRadius: "25px",
                    border: "2px solid red",
                  }}
                ></FontAwesomeIcon>
              </button>
            </div>
            <div style={{ display: "inline-block" }}>
              <button
                className="btn enabled"
                type="submit"
                disabled={!buttonToggle}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  style={
                    buttonToggle
                      ? {
                          padding: "4px",
                          color: "green",
                          borderRadius: "20px",
                          border: "2px solid green",
                        }
                      : {
                          padding: "4px",
                          color: "gray",
                          borderRadius: "20px",
                          border: "2px solid gray",
                        }
                  }
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EditItem;
