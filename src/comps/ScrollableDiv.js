import React, {useEffect, useRef, useState} from "react";
import "./ScrollableDiv.css";

const ScrollableDiv = ({textData, imageData}) => {
	const [curElement, setCurElement] = useState(0);
	const ref = useRef(null);
	const moveForward = () => {if(curElement < textData.length - 1){setCurElement(curElement + 1);}};
	useEffect(() => {
		console.log(curElement);
		console.log(ref ? "yes" : "no");
	}, [curElement]);
	return (
		<div onClick={() => {moveForward()}} className = "ScrollableDiv" ref={ref}>
			<div className = "ScrollableDivTextContent">
				<>{textData.map((innerContent, i) => {
					return(<div className = "TextSlide" key={"text" + i}>
						{innerContent}
					</div>);
				})}</>
			</div>
			<div className = "ScrollableDivImageContent">
				<>{imageData.map((innerContent, i) => {
					return(<div className = "ImageSlide" key={"image" + i}>
						{innerContent}
					</div>);
				})}</>
			</div>
		</div>
	);
};

export default ScrollableDiv;
