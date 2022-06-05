import React, {useEffect, useRef, useState} from "react";
import "./ScrollableDiv.css";

const timers = require('timers-promises');

const ScrollableDiv = ({textData, imageData}) => {
	const [curElement, setCurElement] = useState(-1);
	const [curScrolling, setCurScrolling] = useState(false);
	const [forceScrollCheck, setForceScrollCheck] = useState(false);
	const ref = useRef(null);
	const updateCurElement = () => {
		const computed = (Math.floor((20 + window.scrollY - document.getElementById("AppBarID").clientHeight) / ref.current.firstChild.firstChild.clientHeight))
		//console.log("computed: " + computed);
		//console.log("current scrolling" + curScrolling);
		if(curScrolling){
			if(computed === curElement){
				setCurScrolling(false);
			}
			return curElement;
		}
		return computed;
	};
	const moveBackward = () => {const newCurElement = updateCurElement(); if(newCurElement >= 0){setCurElement(newCurElement - 1); setForceScrollCheck(true);} else {setCurElement(newCurElement);}};
	const moveForward = () => {const newCurElement = updateCurElement(); if(newCurElement < textData.length - 1){setCurElement(newCurElement + 1); setForceScrollCheck(true);} else {setCurElement(newCurElement);}};
	useEffect(() => {
		//console.log(curElement);
		//console.log(ref ? "yes" : "no");
		setForceScrollCheck(false);
		if(!curScrolling && ref.current.firstChild.firstChild){
			ref.current.focus();
			setCurScrolling(true);
			//console.log("scrollY: " + window.scrollY);
			//console.log("target: " + (ref.current.firstChild.firstChild.clientHeight * curElement + document.getElementById("AppBarID").clientHeight));
			window.scroll({
				top: ref.current.firstChild.firstChild.clientHeight * curElement + document.getElementById("AppBarID").clientHeight,
				left: 0,
				behavior: 'smooth'
			});
			setTimeout(() => {setCurScrolling(false);}, 300);
			//console.log(ref.current.firstChild.firstChild);
			//console.log(ref.current.firstChild.firstChild.scrollTop);
			//console.log("client height: " + ref.current.firstChild.firstChild.clientHeight);
		}
	}, [curElement, forceScrollCheck]);
	useEffect(() => {
		const interval = setInterval(() => {
			if(ref.current){
				ref.current.focus();
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);
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
