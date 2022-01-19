import React from "react";
import "./App.css";
import Navigation from "../navigation/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "../../routes/index";

function App() {
	return (
		<>
			<Navigation />
			<Routes />
		</>
	);
}

export default App;
