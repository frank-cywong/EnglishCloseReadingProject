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
						In these two panels, Alison is able to express herself and has fun pretending to be police, while her father, simultaneously, is being indicted by police.
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
						This panel's descriptions and imagery introduce the idea that they are "inversions" due to their views on gender and sexuality, both relative to each other, and relative to society.
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
				</div>
		    ]} imageData = {[
				<img src={require("./img/bookCover.png")}/>,
				<img src={require("./img/page98Full.png")}/>,
				<img src={require("./img/page160161Combined.png")}/>,
				<img src={require("./img/page160161Combined.png")}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "90%"}}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "90%"}}/>,
				<img src={require("./img/page98Top.png")} style={{height: "90%"}}/>,
				<img src={require("./img/page98Inversions.png")} style={{width: "90%"}}/>,
				<img src={require("./img/page98Cross.png")} />
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
