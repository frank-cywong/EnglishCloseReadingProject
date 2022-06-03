import React, {useState} from "react";
import "./ScrollableDiv.css";

const ScrollableDiv = ({textData, imageData}) => {
	return (
		<div className = "ScrollableDiv">
			<div className = "ScrollableDivTextContent">
				<>{textData}</>
			</div>
			<div className = "ScrollableDivImageContent">
				<>{imageData}</>
			</div>
		</div>
	);
};

export default ScrollableDiv;
