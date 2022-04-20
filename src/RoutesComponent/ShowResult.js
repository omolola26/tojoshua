import React from "react";
import "./showresult.css";

function ShowResult() {
  return (
    <div className="showResult">
      <div className="showResultContainer">
          <div className="showTitle">
            <div className="showdate">
            <h1>Survey Participant</h1>
              <input type="date" 
              id="start" 
              name="trip-start"
              value="2018-07-22"
              />
            </div>
            <button>
            <i class="ri-delete-bin-3-line"></i>Delete Result
          </button>
          </div>
          
        <div className="border"></div>
        <div className="biography">
          <h3>Bio Data</h3>
          <p>Enter your correct data below</p>
        </div>
        <div className="inputData">
            <form>
            <div className="general-input">
            <div>
            <div className="inner-input">
                <label>Frist Name</label>
                <input type="text"  placeholder="Kolade"/>
            </div>
            <div className="inner-input">
                <label>Email</label>
                <input type="text"  placeholder="SeniorMan@gmail.com" className="bvn-only"/>
            </div>
           
            </div>
            <div>
            <div className="inner-input">
                <label>Last Name</label>
                <input type="text"  placeholder="Senior Man"/>
            </div>
            <div className="inner-input">
                <label>Gender</label>
                <input type="text"  placeholder="Male"/>
            </div>
            </div>
            </div>
            <div className="diff-input">
                <label>Address</label>
                <textarea rows="5" cols="40" placeholder="Enter your Address"/>
            </div>
            </form>
        </div>
        <div className="bio-bvn">
        <div className="bvn-title">
        <h3>Bank Verification</h3>
        </div>
        <div className="bvn-input">
        <label>BVN</label>
        <span><i class="ri-checkbox-circle-line"></i>Verified</span>
        <div className="bvn-link">
          <input type="text" placeholder="2390812001"/>
          <a href="">View Bvn Data details</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ShowResult;
