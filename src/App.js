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
						I first noticed these "inversions" in this scene with the mirror. My interest in physics (mirrors) and mathematics (geometric inversions) made this scene stay in my head, and I soon noticed more inversions elsewhere.
					</Typography>
				</div>,
				<div>
					Lorem3 ipsum dolor sit amet <br />
					asdasd3
				</div>
		    ]} imageData = {[
				<img src={require("./img/bookCover.png")}/>,
				<img src={require("./img/page98Full.png")}/>,
				<div>
					Lorem3 ipsum dolor sit amet <br />
					asdasd3as
				</div>
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
