import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovie, resetMovie} from "../redux/movie";

const UseMovieDetails = () => {
	const dispatch = useDispatch()
	const {movie} = useSelector((store) => store)
	const {id} = useParams()

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

	return {movie}
};

export default UseMovieDetails;