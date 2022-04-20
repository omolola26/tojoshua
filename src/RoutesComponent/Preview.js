import React from "react";
import "./preview.css";
import rect from "../../src/rect.png";
import HeaderII from "../HeaderII"

function Preview() {
  return (
    <div className="preview">
    <HeaderII/>
    {/* <div className="previewOne">
      <div className="container-preview">
        <div className="headercontent-preview">
          <div className="box">
            <img src={rect} alt="rect" />
          </div>
          <div className="title">
            <h5>Portfolio 9 Engagement Form</h5>
            <p>
              This form is for our new members who are looking to get financial
              aid from the platform, this form will verify and collect bio data
              from individuals.
            </p>
          </div>
        </div>
      </div>

      <div className="bioDataPreview">
        <div className="contentOnePreview">
          <div className="titleContentsPreview">
            <h1>Bio Data</h1>
            <p>Enter your correct data below</p>
          </div>
        </div>
        <div className="inputDetailsPreview">
          <div className="newDropPreview">
            <div className="fieldPreview">
              <input
                type="text"
                placeholder="Enter first name"
                className="control"
                id="formBasicmailPreview"
              />
            </div>
            <div className="fieldPreview">
              <input
                type="text"
                placeholder="Enter email address"
                className="control"
                id="formBasicmailPreview"
              />
            </div>
            <div className="fieldPreview">
              <input
                type="text"
                placeholder="Select Your gender"
                className="cont"
                id="formBasicmailPreview"
              />
            </div>
            <div className="radioFieldPreview">
              <input type="radio" value="Male" className="rad" />
              <label>Male</label>
              <input type="radio" value="female" className="rad" />
              <label>Female</label>
              <input type="radio" value="not to say" className="rad" />
              <label>Prefer not to say</label>
            </div>
          </div>
          <div className="fieldText">
            <div className="fieldPreview">
              <input
                type="text"
                placeholder="Enter last address"
                className="control"
                id="formBasicmailPreview"
              />
            </div>
            <div className="fieldPreview">
              <input
                type="text"
                placeholder="Home address"
                className="control"
                id="formBasicmailPreview"
              />
            </div>
          </div>
        </div>
        <div className="field-btn">
              <button>Submit Form</button>
            </div>
      </div>
      </div> */}
    </div>
  );
}

export default Preview;
