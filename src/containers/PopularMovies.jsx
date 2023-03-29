import React from 'react';
import {useSelector} from "react-redux";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import {Typography} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularMovies from "../hooks/usePopularMovies";

const PopularMovies = () => {
	const {loadMore, movies} = usePopularMovies()
	const {genres} = useSelector((state) => state.genres)
	const isFetching = movies.isFetching
	const moviePage = movies.page

	return moviePage === 0 && isFetching ? <Loader/>
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