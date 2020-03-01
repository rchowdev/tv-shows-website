import React, { useState, useEffect } from "react";
import moment from "moment";

import TVShowCard from "./TVShowCard";

const TVShowsContainer = () => {
	const [shows, setShows] = useState([]);

	// Fetch Today's TV Shows
	useEffect(() => {
		const getSchedule = async date => {
			const scheduleUrl = `http://api.tvmaze.com/schedule?country=US&date=${date}`;
			const data = await fetch(scheduleUrl);
			const todaysEpisodes = await data.json();
			const todaysShows = todaysEpisodes.map(episode => episode.show);
			setShows(todaysShows);
		};

		const today = moment().format("YYYY-MM-DD");
		getSchedule(today);
	}, []);

	return (
		<div id="tv-show-container">
			<ul>
				{shows.map(show => (
					<TVShowCard key={show.id} show={show} />
				))}
			</ul>
		</div>
	);
};

export default TVShowsContainer;
