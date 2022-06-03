import React, {useEffect, useRef, useState} from "react";
import "./ScrollableDiv.css";

const timers = require('timers-promises');

const ScrollableDiv = ({textData, imageData}) => {
	const [curElement, setCurElement] = useState(0);
	const ref = useRef(null);
	const moveBackward = () => {if(curElement > 0){setCurElement(curElement - 1);}};
	const moveForward = () => {if(curElement < textData.length - 1){setCurElement(curElement + 1);}};
	useEffect(() => {
		//console.log(curElement);
		//console.log(ref ? "yes" : "no");
		if(ref.current){
			ref.current.focus();
			window.scroll({
				top: ref.current.clientHeight * curElement,
				left: 0,
				behavior: 'smooth'
			});
			//console.log(ref.current.scrollTop);
			//console.log(ref.current.clientHeight);
		}
	}, [curElement]);
	return (
		<div onClick={() => {moveForward()}} tabIndex = "-1" onKeyPress={(e) => {if(e.key === 'n'){moveForward();} else if (e.key === 'p'){moveBackward();}}} onBlur={async () => {await timers.setTimeout(100); console.log("test"); console.log(ref.current ? "yes" : "no"); ref.current.focus();}} className = "ScrollableDiv" ref={ref} key="mainScrollable">
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
