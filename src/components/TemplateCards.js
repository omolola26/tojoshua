import React from "react";
import "../Styles/Cards.css";
import TemplateGallery from "./TemplateGallery";
import { TemplateData } from "../components/cardData";

function TemplateCards() {
	return (
		<div>
			<div className="row">
				{TemplateData.map((item) => (
					<div className="col-md-3">
						<TemplateGallery card={item} key={item.id} />
					</div>
				))}
			</div>
		</div>
	);
}

export default TemplateCards;
