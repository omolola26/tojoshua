import React from "react";
import "./head.css";
import identity from "./identity.png";
import { Link } from "react-router-dom"

function HeaderII(props) {
  return (
    <div className="headerOne">
      <div className=" header-nav">
        <img src={identity} alt="identity" />
        <h3>Forms</h3>
      </div>
      <div className="center">
        <nav>
          <ul className="profile-link">
            <li onClick={() => props.goToNextPage(1)}>
              <a>Overview</a>
            </li>
            <li onClick={() => props.goToNextPage(2)}>
              <a>Questions</a>
            </li>
            <li>
              <Link to="/preview">Preview Form</Link>
            </li>
            <li>
              <Link to="/shareform">ShareForm</Link>
            </li>
            <li>
              <Link to="/viewresult">Veiw Results</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderII;
