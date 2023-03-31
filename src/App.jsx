import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Seats from "./components/Seats";

// date picker
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/seats" element={<Seats />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
