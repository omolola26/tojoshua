import React, { useState } from "react";
import Header from "../Header/Header";
import CardComponent from "./CardComponent";
import TemplateCards from "../components/TemplateCards";
import "./home.css";

function Home() {
  const [cards, setCards] = useState("forms");
  return (
    <div className="home">
      <Header />
      <div className="">
        <div className="row p-0 m-0">
          <div className="col-md-2">
            <div className="sidebar">
              <div className="content">
                <div className="left" onClick={() => setCards("forms")}>
                  <i className="ri-file-line"></i>
                  <h5>Your Forms</h5>
                </div>
                <div className="left" onClick={() => setCards("template")}>
                  <i class="ri-gallery-upload-line"></i>
                  <h5>Template Gallery</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 cardSection">
          <h1 className="yourwork">Your Work space</h1>
            <div className="main-content">
              {cards === "forms" ? <CardComponent /> : <TemplateCards/>}
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
export default Home;
