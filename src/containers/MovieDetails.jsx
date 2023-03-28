import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovie, resetMovie} from "../redux/movie";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
import Loader from "../components/Loader";

const MovieDetails = () => {
	const dispatch = useDispatch()
	const {movie} = useSelector((store) => store)
	const {genres} = useSelector((store) => store.genres)
	const {id} = useParams()
	const isFetching = movie.isFetching

	useEffect(() => {
		dispatch(getMovie(id ? parseInt(id, 10) : 0))

		return () => {
			dispatch(resetMovie())
		}
	}, [dispatch])

	useEffect(() => {
		if (id !== movie.id?.toString()) {
			dispatch(getMovie(id ? parseInt(id, 10) : 0))
		}
	}, [id, movie.id])

	return (
		isFetching ? <Loader/> : <Movie movie={movie} genres={genres}/>
	);
};

export default MovieDetails;