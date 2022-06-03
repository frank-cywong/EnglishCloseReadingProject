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
						<p style={{paddingTop: "110px"}}>
							To go to the next slide, scroll down, left-click, or press the N key.<br />
							To go back to the previous slide, scroll up or press the P key.<br />
						</p>
				</div>,
				<div>
					Lorem2 ipsum dolor sit amet <br />
					asdasd2
				</div>
		    ]} imageData = {[
				<img src={require("./img/bookCover.png")}/>,
				<div>
					Lorem2 ipsum dolor sit amet <br />
					asdasd2as
				</div>
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
