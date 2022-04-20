import React, { useState } from "react";
import "../Styles/Cards.css";
import { Button, Modal, NavItem } from "react-bootstrap";
import Platform from "../Assets/Image/Platform-logo.png";
import { Link } from "react-router-dom";


function TemplateGallery({ card }) {
	const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

	return (
		<div className="template-gallery">
			<div className="card-gallery">
				<img src={card.img_url} className="card-img-top" alt="image"/>
					<div className="card-body-gallery">
                  <h5 className="card-title-gallery">{card.title}</h5>
                  <p>{card.word}</p>
						<div className="card-img-top-overlay">
							<div className="preview">
								<span className="overlay-icon">
									<i className="ri-search-line" />
								</span>
								<button className="btn btn-secondary" value="Preview" onClick={handleShow}>
									Preview
								</button>
							</div>
						</div>
					</div>
			</div>

			<div className="modal-preview-gallery">
				<Modal size="xl" show={show} onHide={handleClose}>
					<div className="modal-content">
						<Modal.Title>
							<div className="header-gallery">
								<div className="logo">
									<img src={Platform} alt="Platform" />
								</div>
								<div className="header-content-gallery">
									<div className="header-text-gallery">
										<h3>{card.title}</h3>
										<p>
											{card.ModalDescription}
										</p>
									</div>
									<div className="header-button-gallery">
										<Link to="/homepage" state={{ from: card.inputForm, pageCount: 2 }}><button>Use Template</button></Link>
									</div>
								</div>
							</div>
						</Modal.Title>
						<Modal.Body>
							<div className="form-preview">
								<div className="form-data">
									<h3>
										<strong>BioData</strong>
									</h3>
									<small>Add Description (Optional)</small>

									<form className="form">
										<div className="row">
											<div className="col">
												<input
													type="text"
													className="form-control w-100 focus visible"
													placeholder="Enter first name"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control w-100"
													placeholder="Enter last name"
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													type="email"
													className="form-control w-100"
													placeholder="Enter email address"
													readonly
												/>
													<input type="checkbox" className="toggle"/>
													<label for="toggle" className="label-verification"><small>Send Verification Code</small></label>
											</div>

											<div className="col">
												<input
													type="text"
													className="form-control w-100"
													placeholder="Home address"
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													type="text"
													className="form-control w-100"
													placeholder="Select Your Gender"
												/>
											</div>
											<div class="col">
												<input
													type="hidden"
													className="form-control w-100"
													placeholder="Last name"
												/>
											</div>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="gender"
												id="male"
												value="male"
											/>
											<label className="form-check-label" for="male">
												Male
											</label>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="gender"
												id="female"
												value="female"
											/>
											<label className="form-check-label" for="female">
												Female
											</label>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="gender"
												id="undefine"
												value="prefer not to say"
											/>
											<label className="form-check-label" for="undefine">
												Prefer not to say
											</label>
										</div>
									</form>
								</div>

								<div className="person-data">
									<div className="persona-form">
										<h3>
											<strong>Personal Details</strong>
										</h3>
										<small>Add Description (Optional)</small>
									</div>
									<form>
										<div className="row">
											<div className="col">
												<input
													type="text"
													className="form-control w-100"
													placeholder="Phone Number"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control w-100"
													placeholder="Birthday"
												/>
											</div>
										</div>
										<div className="persona-button">
											<button>Submit Application</button>
										</div>
									</form>
								</div>
							</div>
						</Modal.Body>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default TemplateGallery;
