import React from "react";
import "./cardCom.css";
import { cardDatas } from "../components/cardData";
import AllCards from "../components/AllCards";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="cardComponent">
      <div className="d-flex justify-content-center">
        <div className="newcol">
          <div className="card" id="sepCard">
            <div className="card-body centre">
              <div className="card-icon" onClick={handleShow}>
                <i className="ri-add-line"></i>
              </div>
            </div>
            <h5 className="card-titleform">Create A New Form</h5>
          </div>
        </div>

        {cardDatas.map((item) => (
          <div className="">
            <AllCards item={item} key={item.id} />
          </div>
        ))}
      </div>
      <div>
     


        <Modal show={show} onHide={handleClose} className="allmodal">
          <Modal.Dialog>
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body>
              <h5>Give your form a Name</h5>
              <p>Make sure the details you fill here are yours and correct</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Modal.Body>
              
            <Modal.Footer>
              <Link to="/homepage">
                <button className="bttn">Create Form</button>
              </Link>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </div>
  );
}

export default CardComponent;
