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
						Why does Bechdel frame her and her father like this?<br /><br />How else does Bechdel frame them as being different from society?<br /><br />What does this contrast and framing reveal?
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
				</div>,
				<div>
					<Typography variant = "h6">
						However, this brings up another point, which is that Alison and her father have "inverted" environments.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Her father is surrounded by people with a more conservative view towards sexuality and gender.<br /><br />This is supported by Bechdel later alluding to Oscar Wilde's trial, which was almost 80 years before her father's, to show how the views of the people surrounding her father haven't changed since then.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This contrasts with Bechdel's environment. The Gryglewiczes and her brothers provided her an outlet to express her gender identity without being judged with their more progressive views. 
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This contrast is alluded to with details such as the Gryglewiczes' pickup truck;<br/><br />versus her father's station wagon,
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						As well as the international and modern aspect of the Gryglewiczes (whose names are of Polish origin and live next to a college fraternity house) and her brothers;<br/><br />versus her father's provincial trial in a small courthouse in rural Pennsylavnia.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This modern aspect is also supported by other hints, like how they both have a doctoral degree, an especially impressive feat for women given the social norms at the time;<br /><br />how they have nude art of themselves openly displayed (and how it's suggested they have even more);
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						And also by how the children in these panels behave, with one of them having a spiked hairstyle (referring to the punk rock movement at the time), having sunglasses on indoors, and wearing a Bugs Bunny t-shirt (a reference to the new cartoons of the television era).
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						The influence of the Gryglewiczes on Bechdel was important, as their story of breaking boundaries themselves (doctoral education for women) and also being open about sex, helped give Bechdel support to express her gender identity.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This support is another field in which Bechdel and her father are "inversions".<br /><br />Unlike the Gryglewiczes, her father hides his gender identity and sexuality, while her mother stands to the side and doesn't give any support to either of them (and doesn't even appear in pages 160 and 161).
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Looking at Bechdel's father gives us an idea of how Alison might have ended up differently otherwise.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Here, the panels are set in darkness, and in only one panel is Bechdel's father visible. The rest of the time, he is being framed as hiding behind the glass of the car, or as just a silhouette in the shadows.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						His homosexuality is framed as his "dark side" which must be hidden away, with Bechdel alluding to this view of her father by mentioning the story of <a href="https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde" target="_blank" rel="noreferrer noopener" style={{color: "white"}}>Dr. Jekyll and Mr. Hyde</a>, which involves a person with two sides, the good side being Dr. Jekyll, and the hidden bad and criminal one being Mr. Hyde.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Even during his trial, his homosexuality was never explicitly mentioned, as it was seen as too taboo to even be said out loud.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Bechdel puts the part where her father explicitly tells her about his sexuality near the very end of the book.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						She also describes it as "not [being a] reunion", but rather frames herself as the parent listening to her father's story of his past.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This in itself is another "inversion", as Alison assumes a parental figure in giving her father support to be open about expressing his identity like she did.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Chronologically, shortly after this, Bechdel's father dies.<br /><br />In the end, she frames this as Icarus "hurtling into the sea", another inversion of parental roles, but also mentions that he helped "catch [her] when [she] leapt".
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Perhaps seeing her father hide his identity in darkness helped push her to show her identity openly in broad daylight.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Going back to page 98, she openly expresses her desire to be more masculine, while her father projects his desire to be more feminine onto her, being afraid to openly express his own desire.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						In fact, across all 3 pages, Alison can be seen expressing her own identity in well-lit environments in front of other people, while her father can only express his desires in the shadows obscured by darkness.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						In these 3 pages, the only case where Alison or her father is able to have fun openly is in page 160 in the middle, where Alison is surrounded by supportive people who she is able to have fun roleplaying with, including openly "inverting" gender and social role.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						This support and openness towards gender identity and sex is further shown by how the children in the lower panel are neither fazed or annoyed by Alison dressing in male clothing as a police officer, nor the open depiction of sex in the Gryglewiczes' nude painting.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						The open-mindeded-ness of the people around Bechdel and the sympathy after seeing how her father was unable to have the same environment as she did made Bechdel able to express her gender and sexual identity openly (and even write this book all about it).
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						Maybe this is the "true inversion" of the story.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h6">
						That the more open-minded and socially progressive environment Bechdel was surrounded by allowed her to be open about her identity, while her father was unable to escape the traditional social norms he grew up with.
					</Typography>
				</div>,
				<div>
					<Typography variant = "h2" style={{fontWeight: 600}}>
						End.
					</Typography>
					<div onClick={() => {window.scroll({
						top: 0,
						left: 0,
						behavior: "smooth"
					})}}>
						<p style={{textDecoration: "underline", cursor: "pointer"}}>Return to start.</p>
					</div>
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
				<img src={require("./img/page161Full.png")}/>,
				<img src={require("./img/page161Full.png")}/>,
				<img src={require("./img/oscarWildeReference.png")} style = {{height: "75%"}}/>,
				<img src={require("./img/page160Full.png")}/>,
				<img src={require("./img/page160161CombinedCarComp.png")}/>,
				<img src={require("./img/bulkComparisonCropped.png")}/>,
				<img src={require("./img/page160Doctorate.png")}/>,
				<img src={require("./img/page160Punk.png")}/>,
				<img src={require("./img/page160Doctorate.png")}/>,
				<img src={require("./img/page98Mother.png")}/>,
				<img src={require("./img/page161Full.png")}/>,
				<img src={require("./img/page161Darkness.png")}/>,
				<img src={require("./img/page160Jekyll.png")} style = {{width: "75%"}}/>,
				<img src={require("./img/page180Top.png")} style = {{height: "75%"}}/>,
				<img src={require("./img/page220221Combined.png")}/>,
				<img src={require("./img/page220221CombinedInversion.png")}/>,
				<img src={require("./img/page220221CombinedInversion.png")}/>,
				<img src={require("./img/page232Full.png")}/>,
				<img src={require("./img/page160161Combined.png")}/>,
				<img src={require("./img/page98Full.png")}/>,
				<img src={require("./img/page98160161Combined.png")}/>,
				<img src={require("./img/page98160161Combined.png")}/>,
				<img src={require("./img/page160BottomHighlighted.png")} style = {{width: "75%"}}/>,
				<img src={require("./img/page160Full.png")}/>,
				<img src={require("./img/page160Full.png")}/>,
				<img src={require("./img/page98160161Combined.png")}/>,
				<div style={{display: "block", width: "90%", height: "90%", alignItems: "left", justifyContents: "left", textAlign: "left"}}>
					<Typography variant="h4">Sources:</Typography>
					<p>
						Bechdel, Alison. Fun Home.<br />
						"Bugs Bunny - Cartoon Character". <a href="https://www.britannica.com/topic/Bugs-Bunny" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://www.britannica.com/topic/Bugs-Bunny</a>.<br />
						"Gryglewicz Surname". <a href="https://forebears.io/surnames/gryglewicz" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://forebears.io/surnames/gryglewicz</a>.<br />
						"Liberty Spikes". <a href="https://en.wikipedia.org/wiki/Liberty_spikes" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Liberty_spikes</a>.<br />
						"Paella". <a href="https://en.wikipedia.org/wiki/Paella" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Paella</a>.<br />
						"Pickup Truck". <a href="https://en.wikipedia.org/wiki/Pickup_truck" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Pickup_truck</a>.<br />
						"Polish Language: Phonology". <a href="https://en.wikipedia.org/wiki/Polish_language#Phonology" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Polish_language#Phonology</a>.<br />
						"Oscar Wilde". <a href="https://www.britannica.com/biography/Oscar-Wilde" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://www.britannica.com/biography/Oscar-Wilde</a>.<br />
						"Regina v. Wilde". <a href="https://en.wikipedia.org/wiki/Oscar_Wilde#Regina_v._Wilde" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Oscar_Wilde#Regina_v._Wilde</a>.<br />
						"Saturnalia". <a href="https://en.wikipedia.org/wiki/Saturnalia" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Saturnalia</a>.<br />
						"Saturnalia (Roman Festival)". <a href="https://www.britannica.com/topic/Saturnalia-Roman-festival" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://www.britannica.com/topic/Saturnalia-Roman-festival</a>.<br />
						"Station Wagon". <a href="https://en.wikipedia.org/wiki/Station_wagon" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Station_wagon</a>.<br />
						"Strange Case of Dr Jekyll and Mr Hyde". <a href="https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde" target="_blank" rel="noreferrer noopener" style={{color: "black"}}>https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde</a>.<br />
					</p>
				</div>
			]}/>
		</div>
	</ThemeProvider>
  );
}

export default App;
