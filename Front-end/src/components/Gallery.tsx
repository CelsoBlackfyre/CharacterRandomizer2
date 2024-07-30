import React from "react";
import Card from "./Card";
import { data } from "../assets/data/data";

const Gallery: React.FC = () => {
	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
