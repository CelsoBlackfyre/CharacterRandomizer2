import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Gallery from "../components/Gallery";
import Randomizer from "../components/Randomizer";

function MainPage() {
	return (
		<div>
			<Navbar />
			<Randomizer />
			<Gallery />
		</div>
	);
}
export default MainPage;
