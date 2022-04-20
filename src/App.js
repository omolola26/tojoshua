import Home from "./components/Home";
 import HomePage from "./Pages/HomePage"
 import ViewResult from "./ViewResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Overview from "../src/Pages/Overview"
//  import BioData from "./Pages/BioData"
// import HeaderPage from "./Pages/HeaderPage";
import "./App.css";
import Preview from "./RoutesComponent/Preview";
import Share from "./RoutesComponent/Share";


function App() {
  return (
    <div className="App">
       <Router>
      <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/homepage" element={<HomePage/>}/> 
        <Route path="/preview" element={<Preview/>}/>
        <Route path="/shareform" element={<Share/>}/>
        <Route path="/viewresult" element={<ViewResult/>}/>
      </Routes>
    </Router>   

   
    </div>
  );
}

export default App;
