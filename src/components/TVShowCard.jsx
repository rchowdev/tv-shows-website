import React from "react";

const TVShowCard = ({ show }) => {
	const image = show.image
		? show.image.medium
		: "https://go-gae-image-api-example-dot-gae-lab-001.appspot.com/img?f=img-api-example/2.jpg";
	return (
		<li class="tv-show-card">
			<h1>{show.name}</h1>
			<img src={image} alt={show.name} />
		</li>
	);
};

export default TVShowCard;
