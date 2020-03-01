import React from "react";

const TVShowCard = ({ show }) => {
	const image = show.image
		? show.image.medium
		: "https://go-gae-image-api-example-dot-gae-lab-001.appspot.com/img?f=img-api-example/2.jpg";
	return (
		<div className="tv-show-card">
			<div>
				<a href={show.officialSite}>{show.name}</a>
				<span>
					<i className="fas fa-star"></i>{" "}
					{show.rating.average || "N/A"}
				</span>
			</div>

			<img src={image} alt={show.name} />
		</div>
	);
};

export default TVShowCard;
