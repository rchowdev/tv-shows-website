import React from "react";
import "./App.css";

import TVShowsContainer from "./components/TVShowsContainer";

function App() {
	return (
		<div id="app-container">
			<h1>TV Shows On Today</h1>
			<TVShowsContainer />
		</div>
	);
}

export default App;
