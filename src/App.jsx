import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Seats from "./components/Seats";

// date picker
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-main-pattern bg-cover bg-center bg-fixed">
				<div>
					<Navigation />
				</div>
				<div></div>
				<div>
					<Seats />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
