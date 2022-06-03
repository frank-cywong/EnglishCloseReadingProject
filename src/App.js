import logo from './logo.svg';
import './App.css';
import ScrollableDiv from './comps/ScrollableDiv.js'
import ThemeProvider from './comps/ThemeProvider.js'
import TopBar from './comps/TopBar.js'

function App() {
  return (
	<ThemeProvider>
		<div className="App">
		  <TopBar />
		  <ScrollableDiv />
		</div>
	</ThemeProvider>
  );
}

export default App;
