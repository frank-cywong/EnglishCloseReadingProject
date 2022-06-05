import './App.css';
import ScrollableDiv from './comps/ScrollableDiv.js'
import ThemeProvider from './comps/ThemeProvider.js'
import TopBar from './comps/TopBar.js'
import Typography from '@mui/material/Typography';

function App() {
  return (
	<ThemeProvider>
		<div className="App">
		    <TopBar />
		    <ScrollableDiv textData = {[
				<div style={{display: "block"}}>
						<p>
							Frank Chun Yeung Wong<br />
							Ms. Crutchfield<br />
							American Literature<br />
							3 June 2022
						</p>
						<Typography variant = "h2" style={{fontWeight: 600}}>
							Inversions in Fun Home
						</Typography>
						<p style={{paddingTop: "8vh"}}>
							To go to the next slide, scroll down, left-click, or press the N key.<br />
							To go back to the previous slide, scroll up or press the P key.<br />
							In case you lose focus, click on the slides again to regain focus. <br />
						</p>
				</div>,
				<div>
					<Typography variant = "h6">
						I first noticed these "inversions" in this scene with the mirror. My interest in physics (mirrors) and mathematics (<a href="https://en.wikipedia.org/wiki/Inversive_geometry#Inversion_in_a_circle" target="_blank" rel="noreferrer noopener" style={{color: "white"}}>geometric inversions</a>) made this scene stay in my head.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						I soon noticed "inversions" elsewhere.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						In the first panel, Alison is able to express herself and has fun pretending to be police. In the next one, the situation is inverted. As Alison is having fun, her father is being indicted by police.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Going back to the mirror scene, Bechdel does frame her and her father being "inversions" very explicitly at times.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Why does Bechdel frame her and her father like this?<br />How else does Bechdel frame them as being different from society?<br />What does this contrast and framing reveal?
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This panel's descriptions and imagery introduce the idea that they are "inversions" due to their views on gender and sexuality relative to each other. She wants to be more masculine, and her father wants to be more feminine.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Which is also supported by the wordplay here between "inverts" (a dated term for homosexuals) and the "inversions" of she and her father...
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						And also that of "cross-purposes" down below, which also relates with them cross-dressing, and them physically swapping locations between these two panels.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						However, their gender identity and sexual orientation makes them not just "inversions" of each other, but also inverts relative to society.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Their "inverted" roles and desires compared to society is quite explicitly alluded to in page 160.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						In addition to Alison dressing up in typical male clothing as a police officer, a job largely dominated by males <a href="https://www.statista.com/statistics/195324/gender-distribution-of-full-time-law-enforcement-employees-in-the-us/"  target="_blank" rel="noreferrer noopener" style={{color: "white"}}>(even to this day)</a>,
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
					The panel also alludes to Saturnalia, a Roman festival which, among other things, included a relaxation of social norms and reversal of social roles. 
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						However, the 1970s weren't ancient Rome, and these "inversions" don't come without consequences, as is apparent in page 161, in which Alison's father is indicted by police for providing alcohol to a minor.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Yet, that wasn't the real crime here, which instead was the fact that he was in a romantic (and likely sexual) same-sex relationship with a minor. 
					</Typography>
				</div>
		    ]} imageData = {[
				<img src={require("./img/bookCover.png")}/>,
				<img src={require("./img/page98Full.png")}/>,
				<img src={require("./img/page160161Combined.png")}/>,
				<img src={require("./img/page160161Combined.png")}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "75%"}}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "75%"}}/>,
				<img src={require("./img/page98Top.png")} style={{height: "75%"}}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "75%"}}/>,
				<img src={require("./img/page98Cross.png")} />,
				<img src={require("./img/page98Full.png")}/>,
				<img src={require("./img/page160Full.png")}/>,
				<img src={require("./img/page160LowerHighlighted.png")} style = {{height: "75%"}}/>,
				<img src={require("./img/page160LowerHighlighted.png")} style = {{height: "75%"}}/>,
				<img src={require("./img/page161Full.png")}/>,
				<img src={require("./img/page161Full.png")}/>
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
