import React from "react";
import "./cardCom.css";
import { useState } from "react";

function AllCards({ item, key}) {
  const [selector, setSelector] = useState(false);


  const showSelector = () => {
    setSelector(!selector);
  };

  return (
    <div className="">
      <div className="card" id="sepCard">
        <img src={item.img_url} className="card-img-top" alt="imag" />
        <h5 className="card-title">{item.title}</h5>
        <div className="card-content">
          <span className="card-text d-flex">
            <i className="ri-calendar-line"></i>
            <p>{item.date}</p>
          </span>
          <span className="sideIcon">
            <i className="ri-share-box-line"></i>
            <i className="ri-more-2-fill"  onClick={showSelector}></i>
          </span>
        </div>
        {selector === true ?
            (
            <div className="more-card">
                <div className="more-card-section">
                    <span>
                    <i class="ri-eye-line"></i>
                    <p>View form</p>
                    </span>
                    <span>
                    <i class="ri-edit-box-line"></i>
                    <p>Rename form</p>
                    </span>
                    <span>
                    <i class="ri-eye-close-line"></i>
                    <p>View Responses</p>
                    </span>
                    <span className="diff">
                    <i class="ri-delete-bin-6-line"></i>
                    <p>Delete form</p>
                    </span>
                </div>
            </div>
            ): null
            }
      </div>
    </div>
  );
}

export default AllCards;
