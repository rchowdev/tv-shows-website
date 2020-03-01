import React, { useState, useEffect } from "react";
import moment from "moment";

import TVShowCard from "./TVShowCard";

const TVShowsContainer = () => {
	const [shows, setShows] = useState([]);

	const uniqArr = arr => {
		const set = new Set();
		const uniq = [];

		for (let i = 0; i < arr.length; i++) {
			if (!set.has(arr[i].id)) {
				set.add(arr[i].id);
				uniq.push(arr[i]);
			}
		}

		return uniq;
	};

	// Fetch Today's TV Shows
	useEffect(() => {
		const getSchedule = async date => {
			const scheduleUrl = `http://api.tvmaze.com/schedule?country=US&date=${date}`;
			const data = await fetch(scheduleUrl);
			const todaysEpisodes = await data.json();
			const todaysShows = todaysEpisodes.map(episode => episode.show);
			const uniqShows = uniqArr(todaysShows);
			setShows(uniqShows);
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
