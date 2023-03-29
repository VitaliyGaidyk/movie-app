import React from 'react';
import {useSelector} from "react-redux";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = () => {
	const {movie} = useMovieDetails()
	const {genres} = useSelector((store) => store.genres)
	const isFetching = movie.isFetching

	return isFetching ? <Loader/> : <Movie movie={movie} genres={genres}/>
};

export default MovieDetails;