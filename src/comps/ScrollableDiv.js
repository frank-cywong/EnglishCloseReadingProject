import React, {useState} from "react";
import "./ScrollableDiv.css";

const ScrollableDiv = ({textData, imageData}) => {
	return (
		<div className = "ScrollableDiv">
			<div className = "ScrollableDivTextContent">
				<>{textData.map(innerContent => {
					return(<div className = "TextSlide">
						{innerContent}
					</div>);
				})}</>
			</div>
			<div className = "ScrollableDivImageContent">
				<>{imageData.map(innerContent => {
					return(<div className = "ImageSlide">
						{innerContent}
					</div>);
				})}</>
			</div>
		</div>
	);
};

export default ScrollableDiv;
