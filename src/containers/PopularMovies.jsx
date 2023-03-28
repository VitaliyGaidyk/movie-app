import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies, resetState} from "../redux/movies";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import {Typography} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";


const PopularMovies = () => {
	const dispatch = useDispatch()
	const {movies} = useSelector((state) => state)
	const {genres} = useSelector((state) => state.genres)

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

	return movies.page === 0 && movies.isFetching ? <Loader/>
		: <>
			<Typography component='h2' variant='h3' gutterBottom={true}>
				Popular Movies
			</Typography>
			<InfiniteScroll next={loadMore}
			                hasMore={movies.hasMore}
			                loader={<Loader/>}
			                dataLength={movies.totalResults}
			                style={{overflow: 'hidden'}}
			>
				<Movies movies={movies} genres={genres}/>
			</InfiniteScroll>
		</>
};

export default PopularMovies;