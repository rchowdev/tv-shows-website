import React, { useState, useEffect } from "react";
import moment from "moment";

import TVShowCard from "./TVShowCard";

const TVShowsContainer = () => {
	const [shows, setShows] = useState([]);

	/* Returns unique array of tv shows */
	const uniqShows = shows => {
		const set = new Set();
		const uniqShows = [];

		for (let i = 0; i < shows.length; i++) {
			if (!set.has(shows[i].id)) {
				set.add(shows[i].id);
				uniqShows.push(shows[i]);
			}
		}

		return uniqShows;
	};

	// Fetch Today's TV Shows
	useEffect(() => {
		const getSchedule = async date => {
			const scheduleUrl = `http://api.tvmaze.com/schedule?country=US&date=${date}`;
			const data = await fetch(scheduleUrl);
			const todaysEpisodes = await data.json();
			const todaysShows = todaysEpisodes.map(episode => episode.show);
			const uniqueShows = uniqShows(todaysShows);
			setShows(uniqueShows);
		};

		const today = moment().format("YYYY-MM-DD");
		getSchedule(today);
	}, []);

	return (
		<div id="tv-shows-container">
			{shows.map(show => (
				<TVShowCard key={show.id} show={show} />
			))}
		</div>
	);
};

export default TVShowsContainer;
