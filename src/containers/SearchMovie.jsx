import React from 'react';
import Suggestion from "../components/Suggestion";
import {useSelector} from "react-redux";

const SearchMovie = () => {
	const {search} = useSelector((state) => state)
	const {genres} = useSelector((state) => state.genres)

	return (
		<Suggestion movies={search} genres={genres}/>
	);
};

export default SearchMovie;