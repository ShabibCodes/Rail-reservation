import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-main-pattern bg-cover bg-center">
				<div>
					<Navigation />
				</div>
				<div>
					<Main />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
