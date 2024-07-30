import React, { useState } from "react";
import { data } from "../assets/data/data";

interface Item {
	id: number;
	name: string;
	lastName: string;
	age: number;
	gender: string;
	sexualOrientation: string;
	race: string;
	skinColor: string;
	bodyType: string;
	eyeColor: string;
	hairColor: string;
	height: number;
	weight: number;
	description: string;
	image: string;
	status: string;
	birthplace: string;
	nationality: string;
	occupation: string;
	class: string;
}

const Randomizer: React.FC = () => {
	const [randomItem, setRandomItem] = useState<Item | null>(null);

	const handleRandomize = () => {
		const randomIndex = Math.floor(Math.random() * data.length);
		setRandomItem(data[randomIndex]);
		document.getElementById("my_modal_5")?.showModal();
	};

	return (
		<div>
			<button className="btn" onClick={handleRandomize}>
				Randomize Item
			</button>

			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Randomized Item</h3>
					{randomItem && (
						<div>
							<p>ID: {randomItem.id}</p>
							<p>
								Name: {randomItem.name} {randomItem.lastName}
							</p>
							<p>Age: {randomItem.age}</p>
							<p>Gender: {randomItem.gender}</p>
							<p>Sexual Orientation: {randomItem.sexualOrientation}</p>
							<p>Race: {randomItem.race}</p>
							<p>Skin Color: {randomItem.skinColor}</p>
							<p>Body Type: {randomItem.bodyType}</p>
							<p>Eye Color: {randomItem.eyeColor}</p>
							<p>Hair Color: {randomItem.hairColor}</p>
							<p>Height: {randomItem.height} cm</p>
							<p>Weight: {randomItem.weight} kg</p>
							<p>Description: {randomItem.description}</p>
							<img
								src={randomItem.image}
								alt={`${randomItem.name} ${randomItem.lastName}`}
							/>
							<p>Status: {randomItem.status}</p>
							<p>Birthplace: {randomItem.birthplace}</p>
							<p>Nationality: {randomItem.nationality}</p>
							<p>Occupation: {randomItem.occupation}</p>
							<p>Class: {randomItem.class}</p>
						</div>
					)}
					<p className="py-4">
						Press ESC key or click the button below to close
					</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Randomizer;
