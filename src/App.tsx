import React from "react";
import LazyImg from "./components/LazyImg/LazyImg";
import RocketLoader from "./components/RocketLoader/RocketLoader";
import space from "./assets/images/space-background.jpg";
import astronaut from "./assets/images/astronaut.png";
import galaxy from "./assets/images/galaxy.jpeg";
import galaxyLight from "./assets/images/galaxy-light.jpeg";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <img src={galaxy} /> */}
			<LazyImg src={galaxy} fallback={galaxyLight} className="galaxy" alt="logo" />
			<div className="section section-first">
				<img src={space} alt="logo" />
			</div>
			<div className="section section-second">
				<RocketLoader />
			</div>
		</div>
	);
}

export default App;
