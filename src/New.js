import React from 'react'
import './new.css';
import {useState} from 'react'
import { Modal, Form } from "react-bootstrap"



function New() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
  
  return (
    <div className="fewers">
    <button type="button" className="btn btn-primary" onClick={showModal}>
  Launch demo modal
</button>
{isModalVisible === true ? 
<div className="collborateModal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
: ""
}
    </div>
  )
}

export default New;