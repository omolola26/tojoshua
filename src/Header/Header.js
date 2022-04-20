import React from "react";
import "./header.css";
import identity from "../../src/identity.png"
function Header() {
  return (
    <div className="header">
      <div className=" headUrl">
        <img src={identity} alt="identity"/>
        <h3>Forms</h3>
      </div>
    </div>
  );
}

export default Header;
