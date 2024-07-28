import React from "react";

interface CardProps {
	card: {
		img: string;
		title: string;
		desc: string;
	};
}

const Card: React.FC<CardProps> = ({ card }) => {
	return (
		<div>
			<div className="card glass w-96 h-full ">
				<figure>
					<img src={card.img} alt="card-img" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{card.title}</h2>
					<p>{card.desc}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Choose</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
