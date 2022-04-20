import React, { useState, useEffect } from "react";
import HeaderII from "../HeaderII";
import "./homepage.css";
// import "./head.css";
import SideDrop from "./SideDrop";
import { useLocation } from "react-router-dom";


function HomePage(props) {
  const [changePage, setChangePage] = useState(1);
  const [descriptionState, setDiscriptionState] = useState([]);

  const location = useLocation()
	const description = location?.state?.from

  const pageCount = location?.state?.pageCount

  useEffect(() => {
    if(description){
      setChangePage(pageCount)
      setDiscriptionState(description)
    }
  }, []);

  let goToNextPage = (n) => {
    setChangePage(n)
  }

  return (
    <div className="homePages">
    <div className="homePage">
      <HeaderII 
       goToNextPage={goToNextPage}
      />
      <div className="sliders">
        <div className="log">
          <div className="logg">
            <p className="forms">Form Element</p>
          </div>
          <div>
            <p className="layer">Logout Design</p>
          </div>
        </div>
        <div className="sidedrag">
         <SideDrop changePage={changePage} sampleDescription={description} descriptionState={descriptionState}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;

 