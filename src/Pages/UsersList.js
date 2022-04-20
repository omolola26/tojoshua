import React from "react";
import { useState } from "react";
import ava from "../../src/ava.png";
import "./afour.css";

function UsersList(props) {
  const [selectory, setSelectory] = useState(false);
  const [viewer, setViewer] = useState(false);
  const [commenter, setCommenter] = useState(false);
  const [editor, setEditor] = useState(false);

  const showSelectory = () => {
    setSelectory(!selectory);
  };

  const  handleCommenter = () => {
    if (commenter === true) {
      setEditor(false);
      setViewer(false);
    }
  };

  const handleView = () => {
    if (viewer === true) {
      setCommenter(false);
      setEditor(false);
    }
  };

  const handleEditor = () => {
    if (editor === true) {
      setViewer(false);
      setCommenter(false);
    }
  };

  return (
    <div className="modalImg">
      <div className="modal-names">
        <img src={ava} alt="meg" />
        <span>
          <h5>{props.item.name}</h5>
          <p>{props.item.email}</p>
        </span>
      </div>
      <div>
        <button className="menu-show" onClick={showSelectory}>
          Editor
          <i class="ri-arrow-drop-down-fill"></i>
        </button>
        {selectory === true ? (
          <div className="more-cards">
            <div className="more-sections">
              <div className="more-contents">
                <div className="checkone" id="allcheck">
                  <input
                    type="checkbox"
                    checked={viewer}
                    className="checkstyle"
                    onChange={(checkbox) => {
                      setViewer(checkbox.target.checked);
                      handleView();
                    }}
                  />
                  <span>
                    <p>Viewer</p>
                  </span>
                </div>

                <div className="checktwo" id="allcheck">
                  <input
                    type="checkbox"
                    checked={commenter}
                    className="checkstyle"
                    onChange={(checkbox) => {
                      setCommenter(checkbox.target.checked);
                      handleCommenter();
                    }}
                  />
                  <span>
                    <p>Commenter</p>
                  </span>
                </div>

                <div className="checkthree" id="allcheck">
                  <input
                    type="checkbox"
                    checked={editor}
                    className="checkstyle"
                    onChange={(checkbox) => {
                      setEditor(checkbox.target.checked);
                      handleEditor();
                    }}
                  />
                  <span>
                    <p>Editor</p>
                  </span>
                </div>

                <div
                  className="checkfour"
                  onClick={() => {
                    props.onChecked(props.id);
                  }}
                >
                  <span className="diff">
                    <p>Remover</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UsersList;
