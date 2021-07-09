import React from "react";
import Moviedetail from "./Moviedetail";
import './Moviestyle.css'

function MovieList({ nowPlayingMovie }) {

	return (
		<>
			<div>
				<div className="grid">
					{nowPlayingMovie?.results?.map((movie) => (
						<Moviedetail movie={movie}/>
					))}
				</div>
			</div>
		</>
	);
}

export default MovieList;
