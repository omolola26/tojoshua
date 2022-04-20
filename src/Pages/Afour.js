import React from "react";
import HeaderPage from "./HeaderPage";
import BioData from "./BioData";
import "./afour.css";
import { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { seed } from "../components/cardData";
import { DropdownButton, Dropdown } from "react-bootstrap";
import UsersList from "./UsersList";
import { useResolvedPath } from "react-router-dom";

function Afour(props) {
  const [displayAfour, setDisplayAfour] = useState(false);
  const [pages, setPage] = useState([1]);
  const [pagesCount, setPagesCount] = useState([1]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalMore, setIsModalMore] = useState(false);
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [inputText, setInputText] = useState("");
  const [itemsContributor, setItemsContributor] = useState([]);
  const [selectory, setSelectory] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const handleShow = () => setShow(true);

 

  const handleMore = () => {
    const nextNum = pages[pages.length - 1] + 1;
    setPage([...pages, nextNum]);
    const newDrop = pagesCount[pagesCount.length - 1] + 1;
    setPagesCount([...pagesCount, newDrop]);
  };

  const handleRemove = (e, item) => {
    if (pages.length > 1 && pagesCount.length > 1) {
      const newpages = pages.filter((page) => {
        return page != item;
      });
      setPage(newpages);
      const removeItem = pagesCount.filter((page) => {
        return page != item;
      });
      setPagesCount(removeItem);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const showSelectory = () => {
    setSelectory(!selectory);
  };

  function handleChange(e) {
    e.preventDefault();
    const newValue = e.target.value.trim();
    let val = newValue.toLowerCase();
    let matcherUsers = seed.filter(
      (user) => val && (user.email.toLowerCase().includes(val)) 
      || (user.name.toLowerCase().includes(val))
      )
    setSearchedUsers(matcherUsers);
    }
  

  function addItem() {
    setSearchedUsers((prevValues) => {
      return [...prevValues, inputText];
    });
    setInputText("");
  }

  function deleteItems(id) {
    setSearchedUsers((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="fourall">
      <div className="A4content">
        <div className="forbutton">
          <div className="pagecancel">
            {pages.map((item) => (
              <button
                className={activePage === item ? "active" : ""}
                onClick={() => setActivePage(item)}
              >
                Page
                {item}
                <i
                  class="ri-close-fill"
                  onClick={(e) => handleRemove(e, item)}
                ></i>
              </button>
            ))}
          </div>
          <div className="pageadd" onClick={handleMore}>
            <button>
              Add Page <i class="ri-add-fill"></i>
            </button>
          </div>
        </div>
        <div className="collaborate">
          <button type="primary" onClick={showModal}>
            Collaborator <i class="ri-user-add-line"></i>
          </button>
        </div>

        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="collaborator-title">
            <h1>Add Collaborators</h1>
            <p>Make sure the details you fill here are yours and correct</p>
          </div>
          <div className="modal-body-contents">
            <div className="modal-inner-content">
              <div className="fieldsAdd">
              <input
                  type="text"
                  placeholder="Add people and group"
                  className="control"
                  id="formBasic"
                  onChange={handleChange}
                />
              </div>
              <div className="fieldDrop">
                <DropdownButton
                  align="end"
                  title="Editor"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="1">
                    <i className="bi bi-check2"></i>Editor
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Viewer</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Commenter</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="modal-contributor">
              {searchedUsers.map((items, index) => (
                <UsersList
                  item={items}
                  key={index}
                  id={index}
                  onChecked={deleteItems}
                />
              ))}
            </div>
          </div>
          <div className="modal-content-btn">
            <button variant="primary" type="submit" onClick={addItem}>
              Send Invite
            </button>
          </div>
        </Modal>
      </div>
      {pagesCount.map((item) => (
        <>
          {activePage === item && (
            <div className="four mb-5" key={item} item={item}>
              {!props.quantity ? (
                <div className="collaborating">
                  <div className="inner">
                    <p>Start Building your form</p>
                  </div>
                  <div className="innerdiv">
                    <p>Drag and drop from element to start building</p>
                  </div>
                </div>
              ) : null}
              {props.quantity.map(() => {
                return activePage === item && <HeaderPage />;
              })}
              {props.displayHeader === true ? <HeaderPage /> : null}
              {props.quality.map(() => {
                return <BioData />;
              })}
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default Afour;
// e.preventDefault();
// setInputText(newValue)
// const newValue = e.target.value.trim();
// let val = newValue.toLowerCase();
// let matcherUsers = seed.filter(user => val && (user.email.toLowerCase().includes(val)) || (user.name.toLowerCase().includes(val))) 
    
//       return user
//   );
// setSearchedUsers(matcherUsers);
// }