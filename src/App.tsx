import React from "react";
import ProgressiveImg from "./components/ProgressiveImg/ProgressiveImg";
import galaxy from "./assets/images/galaxy.jpeg";
import galaxyLight from "./assets/images/galaxy-light.jpeg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ProgressiveImg src={galaxy} fallback={galaxyLight} alt="logo" />
		</div>
	);
}

export default App;
