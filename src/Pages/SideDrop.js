import React from "react";
import "./sidedrop.css";
import { useState, useEffect } from "react";
// import { useDrag } from "react-dnd";
import Afour from "./Afour";
import Preview from "../RoutesComponent/Preview";
import Default from "../components/Question/Default";
import Share from "../RoutesComponent/Share";
import ViewResult from "../ViewResult";

function SideDrop(props) {
  const [displayHeader, setDisplayHeader] = useState(false);
  const [displayBioData, setDisplayBioData] = useState(false);
  const [quantity, setQuantity] = useState([]);
  const [count, setCount] = useState(0);
  const [quality, setQuality ] = useState([]);
  const [counters, setCounters] = useState(0)
  const [displayShortText, setDisplayShortText] = useState(false)
  const [displayLongText, setDisplayLongText] = useState(false)
  const [displayMultipleChoice, setDisplayMultipleChoice] = useState(false)
  const [displayCheckBoxes, setDisplayCheckBoxes] = useState(false)
  const [displayFileUpload, setDisplayFileUpload] = useState(false)
  const [displayDropDown, setDisplayDropDown] = useState(false)
  const [displayBankVerification, setDisplayBankVerification] = useState(false)
  const [displayNINVerification, setDisplayNINVerification] = useState(false)
  

const dragFunction = () => {
  let max = quantity; 
  setCount(count + 1)
  max.push(count);
}

const sort = () => {
  let max = quality; 
  setCounters(counters + 1)
  max.push(counters);
}

  
  return (
    <div className="side-drop">
      <div className="aligns">
        <div className="column">
          <div className="all-drags">
            <div className="dragger" 
            draggable="true"
             onDragEnd={dragFunction}
             >
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-building-2-fill diffIcon towel"></i>
                </div>
                <div className="sidetitle">
                  <p>Add Page Header</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="dragger"
              onDragEnd={sort}
              draggable="true"
              id="2"
            >
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-database-2-fill towel"></i>
                </div>

                <div className="sidetitle">
                  <p>Basic Bio Data</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="dragger" draggable="true">
              <div className="dragcontent">
                <i className="ri-building-fill towel"></i>
                <div className="sidetitle">
                <p>Educational Data</p>
                <div className="addIcon">
                  <i class="ri-add-fill"></i>
                </div>
                </div>
              </div>
              </div>

              <div className="dragger" 
              onDragEnd={() => {setDisplayShortText(true)}}
              draggable="true">
                <div className="dragcontent">
                  <div className="towel">
                    <i class="ri-sort-asc"></i>
                  </div>
                  <div className="sidetitle">
                    <p>Short Text</p>
                    <div className="addIcon">
                      <i class="ri-add-fill"></i>
                    </div>
                  </div>
                </div>
              </div>

            <div className="dragger"
            onDragEnd={() => {setDisplayLongText(true)}} 
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-file-text-fill"></i>
                </div>
                <div className="sidetitle">
                  <p>Long Text</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="dragger" 
             onDragEnd={() => {setDisplayMultipleChoice(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-radio-button-line"></i>
                </div>
                <div className="sidetitle">
                  <p>Multiple choice</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="dragger" 
            onDragEnd={() => {setDisplayCheckBoxes(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-checkbox-line"></i>
                </div>
                <div className="sidetitle">
                  <p>Check boxes</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="dragger" 
            onDragEnd={() => {setDisplayFileUpload(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-upload-cloud-line"></i>
                </div>
                  <div className="sidetitle">
                    <p>File Upload</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="dragger"
            onDragEnd={() => {setDisplayDropDown(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-arrow-down-circle-line"></i>
                </div>
                <div className="sidetitle">
                  <p>DropDown</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="dragger"
            onDragEnd={() => {setDisplayBankVerification(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-building-2-fill diffIcon"></i>
                </div>
                <div className="sidetitle">
                  <p>Bank Verification</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="dragger" 
            onDragEnd={() => {setDisplayNINVerification(true)}}
            draggable="true">
              <div className="dragcontent">
                <div className="towel">
                  <i class="ri-building-2-fill diffIcon"></i>
                </div>
                <div className="sidetitle">
                  <p>NIN Verification</p>
                  <div className="addIcon">
                    <i class="ri-add-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="droping">
          {/* <FormBuilderSchema rootSchema={Seed}/> */}
           {/* {props.changePage === 1 ?  */}
            <Afour
              displayHeader={displayHeader}
              quantity={quantity}
              quality={quality}
              displayBioData={displayBioData}
            />
               
               {/* props.changePage === 2 ? <Default sampleDescription={props.sampleDescription ? props.descriptionState : props.descriptionState}/>
               : null */}
            {/* } */} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideDrop;
