import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopularMovies, resetState} from "../redux/movies";

const UsePopularMovies = () => {
	const dispatch = useDispatch()
	const {movies} = useSelector((state) => state)

	useEffect(() => {
		dispatch(getPopularMovies())

		return () => {
			dispatch(resetState())
		}
	}, [dispatch])

	const loadMore = () => {
		if (movies.hasMore) {
			dispatch(getPopularMovies(movies.page + 1))
		}
	}


	return {loadMore, movies}
};

export default UsePopularMovies;