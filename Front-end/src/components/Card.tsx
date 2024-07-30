import React from "react";

interface CardProps {
	card: {
		image: string;
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
		status: string;
		birthplace: string;
		nationality: string;
		occupation: string;
		class: string;
	};
}

const Card: React.FC<CardProps> = ({ card }) => {
	return (
		<div>
			<div className="card glass w-96 h-full">
				<figure>
					<img src={card.image} alt={`${card.name} ${card.lastName}`} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{card.name} {card.lastName}
					</h2>
					<p>{card.description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Choose</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
