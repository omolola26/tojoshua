import React from "react";
import "./view.css";
import ShowResult from "./RoutesComponent/ShowResult";
import HeaderII from "./HeaderII"
import { useState } from "react";

function ViewResult() {
  const [survey, setSurvey] = useState(false);

  const handleSurvey = () => {
    setSurvey(true);
  };

  return (
    <div className="view-result">
    <HeaderII/>
    <div className="all-view-container">
      <div className="view-container">
        <div className="view-headerAllContents">
          <div className="view-header-contents">
            <div className="view-left">
              <h1>Form Results</h1>
              <p>This are the results gotten from your form so far.</p>
            </div>
            <div className="view-right">
              <div className="input-view">
                <input type="text" placeholder="Search result" />
                <i className="ri-search-line view-icon"></i>
              </div>
              <button className="view-btn">
                Filter Results
                <i class="ri-filter-3-line line-icon"></i>
              </button>
              <button className="view-btn-one">Download all Results</button>
            </div>
          </div>
          <h4>
            Total Response:<span className="reponses"> 89 Responses</span>
          </h4>
        </div>

        <div className="container-survey">
          <div className="survey-container">
            <div className="survey-small">
              <div className="card-container" onClick={handleSurvey}>
                <div className="card-contents">
                  <div className="card-titles">
                    <h3>Survey Participant</h3>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                    />
                  </div>
                  <a href="#" className="new-link">
                    View Results
                  </a>
                </div>
              </div>

              <div className="card-container" onClick={handleSurvey}>
                <div className="card-contents">
                  <div className="card-titles">
                    <h3>Survey Participant</h3>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                    />
                  </div>
                  <a href="#" className="new-link">
                    View Results
                  </a>
                </div>
              </div>

              <div className="card-container" onClick={handleSurvey}>
                <div className="card-contents">
                  <div className="card-titles">
                    <h3>Survey Participant</h3>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                    />
                  </div>
                  <a href="#" className="new-link">
                    View Results
                  </a>
                </div>
              </div>

              <div className="card-container" onClick={handleSurvey}>
                <div className="card-contents">
                  <div className="card-titles">
                    <h3>Survey Participant</h3>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                    />
                  </div>
                  <a href="#" className="new-link">
                    View Results
                  </a>
                </div>
              </div>

              <div className="card-container" onClick={handleSurvey}>
                <div className="card-contents">
                  <div className="card-titles">
                    <h3>Survey Participant</h3>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2018-07-22"
                    />
                  </div>
                  <a href="#" className="new-link">
                    View Results
                  </a>
                </div>
              </div>
            </div>
            <div className="survey-large">
              <div className="inner-container">
                {survey === true ? <ShowResult /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ViewResult;
