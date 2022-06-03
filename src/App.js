import './App.css';
import ScrollableDiv from './comps/ScrollableDiv.js'
import ThemeProvider from './comps/ThemeProvider.js'
import TopBar from './comps/TopBar.js'

function App() {
  return (
	<ThemeProvider>
		<div className="App">
		    <TopBar />
		    <ScrollableDiv textData = {[
			    <div className = "Slide">
					Lorem ipsum dolor sit amet <br />
					asdasd
				</div>,
				<div className = "Slide">
					Lorem2 ipsum dolor sit amet <br />
					asdasd2
				</div>
		    ]} imageData = {[
				<div className = "Slide">
					Lorem isdasdpsum dolor sit amet <br />
					asdasdasd
				</div>,
				<div className = "Slide">
					Lorem2 ipsum dolor sit amet <br />
					asdasd2as
				</div>
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
