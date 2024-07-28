import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import CreateForm from "./components/CreateForm";
import "./index.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/create" element={<CreateForm />} />
			</Routes>
		</Router>
	);
}

export default App;
