// import React, { useState } from "react";
// import Platform from "../../Assets/Image/Platform-logo.png";

// function StudentForm(props) {
// 	const [select, setSelect] = useState(false);

// 	const showSelect = () => {
// 		setSelect(!select);
// 	};

// 	return (
// 		<div>
// 			{props.StudentForm.map(value => (
// 				<div className="bio">
// 				<div className="BioData-header">
// 					<div className="BioHeader-content">
// 						<img src={Platform} alt="Platform" />
// 						<div className="BioHeader-text">
// 							<h3>{value.MainTitle}</h3>
// 							<p>{value.description}</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="bioData">
// 					<div className="contentOne">
// 						<div className="titleContent">
// 							<h1>Student Form</h1>
// 							<p>Add Description(Optional)</p>
// 						</div>
// 						<div className="contentIcon">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								width="25"
// 								height="25"
// 								fill="currentColor"
// 								className="bi bi-toggle-on"
// 								viewBox="0 0 16 16"
// 							>
// 								<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
// 							</svg>
// 							<p>Required</p>
// 							<i className="ri-settings-2-line"></i>
// 							<i class="ri-delete-bin-6-line"></i>
// 							<div className="btnIcon">
// 								<button>
// 									Add Extra Field
// 									<i className="ri-arrow-down-s-line" onClick={showSelect}></i>
// 								</button>
// 							</div>
// 						</div>
// 						<div>
// 							{select === true ? (
// 								<div className="more-cards">
// 									<div className="more-card-section">
// 										<span>
// 											<i class="ri-sort-asc"></i>
// 											<p>Short Text</p>
// 										</span>
// 										<span>
// 											<i class="ri-file-text-fill"></i>
// 											<p>Long Text</p>
// 										</span>
// 										<span>
// 											<i class="ri-radio-button-line"></i>
// 											<p>Multiple choice</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-checkbox-line"></i>
// 											<p>Check boxes</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-upload-cloud-line"></i>
// 											<p>File Upload</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-arrow-down-circle-line"></i>
// 											<p>DropDown</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-notification-badge-line"></i>
// 											<p>Bank Verification</p>
// 										</span>
// 									</div>
// 								</div>
// 							) : null}
// 						</div>
// 					</div>
// 					<div className="inputDetails">
// 						<div className="newDrop">
// 							<div className="field">
// 								<input
// 									type={value.firstName}
// 									placeholder="Enter first name"
// 									className="control"
// 									id="formBasicMail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 							<div className="field">
// 								<input
// 									type={value.emailAddress}
// 									placeholder="Enter email address"
// 									className="control"
// 									id="formBasicMail"
// 								/>

// 								<div className="minus">-</div>
// 							</div>
// 							<ul>
// 								<li className="listItem">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										width="25"
// 										height="25"
// 										fill="currentColor"
// 										class="bi bi-toggle-off"
// 										viewBox="0 0 16 16"
// 									>
// 										<path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
// 									</svg>
// 								</li>
// 								<li>send verification code</li>
// 							</ul>
// 							<div className="field">
// 								<input
// 									type={value.gender}
// 									placeholder="Select Your gender"
// 									className="cont"
// 									id="formBasicMail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 							<div className="radioField">
// 								<input type="radio" value="Male" className="rad" />
// 								<label>Male</label>
// 								<input type="radio" value="female" className="rad" />
// 								<label>Female</label>
// 								<input type="radio" value="not to say" className="rad" />
// 								<label>Prefer not to say</label>
// 							</div>
// 						</div>
// 						<div className="fieldText">
// 							<div className="field">
// 								<input
// 									type={value.lastName}
// 									placeholder="Enter last address"
// 									className="control"
// 									id="formBasicMail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 							<div className="field">
// 								<input
// 									type={value.homeAddress}
// 									placeholder="Home address"
// 									className="control"
// 									id="formBasicMail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="bioData">
// 					<div className="contentOne">
// 						<div className="titleContent">
// 							<h1>Personal Details</h1>
// 							<p>Add Description(Optional)</p>
// 						</div>
// 						<div className="contentIcon">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								width="25"
// 								height="25"
// 								fill="currentColor"
// 								className="bi bi-toggle-on"
// 								viewBox="0 0 16 16"
// 							>
// 								<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
// 							</svg>
// 							<p>Required</p>
// 							<i className="ri-settings-2-line"></i>
// 							<i class="ri-delete-bin-6-line"></i>
// 							<div className="btnIcon">
// 								<button>
// 									Add Extra Field
// 									<i className="ri-arrow-down-s-line" onClick={showSelect}></i>
// 								</button>
// 							</div>
// 						</div>
// 						<div>
// 							{select === true ? (
// 								<div className="more-cards">
// 									<div className="more-card-section">
// 										<span>
// 											<i class="ri-sort-asc"></i>
// 											<p>Short Text</p>
// 										</span>
// 										<span>
// 											<i class="ri-file-text-fill"></i>
// 											<p>Long Text</p>
// 										</span>
// 										<span>
// 											<i class="ri-radio-button-line"></i>
// 											<p>Multiple choice</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-checkbox-line"></i>
// 											<p>Check boxes</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-upload-cloud-line"></i>
// 											<p>File Upload</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-arrow-down-circle-line"></i>
// 											<p>DropDown</p>
// 										</span>
// 										<span className="diff">
// 											<i class="ri-notification-badge-line"></i>
// 											<p>Bank Verification</p>
// 										</span>
// 									</div>
// 								</div>
// 							) : null}
// 						</div>
// 					</div>
// 					<div className="inputDetails">
// 						<div className="newDrop">
// 							<div className="field">
// 								<input
// 									type={value.number}
// 									placeholder="(000) 0000 0000"
// 									className="control"
// 									id="formBasicmail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 						</div>
// 						<div className="fieldText">
// 							<div className="field">
// 								<input
// 									type={value.date}
// 									placeholder="Start Date"
// 									className="control"
// 									id="formBasicmail"
// 								/>
// 								<div className="minus">-</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="bioData-button">
// 						<button>Submit Application</button>
// 					</div>
// 				</div>
// 			</div>
// 			))}
			
// 		</div>
// 	);
// }

// export default StudentForm;
