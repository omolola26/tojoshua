import React, { useState } from "react";

function MultipleChoice() {
	const [multipleChoice, setMultipleChoice] = useState(false);

	const showSelect = () => {
		setMultipleChoice(!multipleChoice);
	};

	return (
		// <div>
		//    <select className="multiple" name="multipleChoice" onClick={showSelect}>
		//     <option value="option1">option1</option>
		//     <option value="option2">option2</option>
		//     <option value="option3">option3</option>
		//    </select>
		// </div>

		<div className="bio">
			<div className="bioData-Long">
				<div className="contentOne-Long">
					<div className="titleContent">
						<h1>Multiple choice</h1>
						<p>Add Description(Optional)</p>
					</div>
					<div className="contentIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							fill="currentColor"
							className="bi bi-toggle-on"
							viewBox="0 0 16 16"
						>
							<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
						</svg>
						<p>Required</p>
						<i className="ri-settings-2-line"></i>
						<i class="ri-delete-bin-6-line"></i>
					</div>
				</div>
				<div className="multiple">
               <select className="multiple" name="multipleChoice" onClick={showSelect}>
						<option value="Sunday">Sunday</option>
						<option value="Monday">Monday</option>
						<option value="Tuesday">Tuesday</option>
						<option value="Wednesday">Wednesday</option>
						<option value="Thursday">Thursday</option>
						<option value="Friday">Friday</option>
						<option value="Saturday">Saturday</option>
               </select>
				</div>
			</div>
		</div>
	);
}

export default MultipleChoice;
