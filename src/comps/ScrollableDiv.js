import React, {useState} from "react";
import "./ScrollableDiv.css";

const ScrollableDiv = ({data}) => {
	return (
		<div className = "ScrollableDiv">
			<div className = "ScrollableDivContent">
				<div className = "Slide">
					Lorem ipsum dolor sit amet <br />
					asdasd
				</div>
				<div className = "Slide">
					Lorem2 ipsum dolor sit amet <br />
					asdasd2
				</div>
			</div>
		</div>
	);
};

export default ScrollableDiv;
