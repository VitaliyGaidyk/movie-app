import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies, resetState} from "../redux/movies";
import Loader from "../components/Loader";


const PopularMovies = () => {
	const dispatch = useDispatch()
	const {movies} = useSelector((state) => state)

	useEffect(() => {
		dispatch(getPopularMovies())

		return () => {
			dispatch(resetState())
		}
	}, [dispatch])


	return movies.page === 0 && movies.isFetching ? <Loader/> : ''
};

export default PopularMovies;