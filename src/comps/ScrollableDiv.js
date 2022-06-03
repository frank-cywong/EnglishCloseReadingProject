import React, {useEffect, useRef, useState} from "react";
import "./ScrollableDiv.css";

const timers = require('timers-promises');

const ScrollableDiv = ({textData, imageData}) => {
	const [curElement, setCurElement] = useState(-1);
	const ref = useRef(null);
	const updateCurElement = () => {return(Math.floor((10 + window.scrollY - document.getElementById("AppBarID").clientHeight) / ref.current.firstChild.firstChild.clientHeight))};
	const moveBackward = () => {const newCurElement = updateCurElement(); if(newCurElement >= 0){setCurElement(newCurElement - 1);} else {setCurElement(newCurElement);}};
	const moveForward = () => {const newCurElement = updateCurElement(); if(newCurElement < textData.length - 1){setCurElement(newCurElement + 1);} else {setCurElement(newCurElement);}};
	useEffect(() => {
		//console.log(curElement);
		//console.log(ref ? "yes" : "no");
		if(ref.current.firstChild.firstChild){
			ref.current.focus();
			window.scroll({
				top: ref.current.firstChild.firstChild.clientHeight * curElement + document.getElementById("AppBarID").clientHeight,
				left: 0,
				behavior: 'smooth'
			});
			//console.log(ref.current.firstChild.firstChild);
			//console.log(ref.current.firstChild.firstChild.scrollTop);
			//console.log("client height: " + ref.current.firstChild.firstChild.clientHeight);
		}
	}, [curElement]);
	useEffect(() => {
		if(ref.current){
			ref.current.focus();
		}
	});
	return (
		<div 
		onClick={() => {moveForward()}} 
		tabIndex = "-1" 
		onKeyPress={(e) => {if(e.key === 'n'){moveForward();} else if (e.key === 'p'){moveBackward();}}} 
		onBlur={async () => {await timers.setTimeout(100); ref.current.firstChild.firstChild.focus();}} 
		className = "ScrollableDiv" ref={ref} key="mainScrollable">
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
