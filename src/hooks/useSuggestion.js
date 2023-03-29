import {searchMovies} from "../redux/search";
import {useDispatch} from "react-redux";

const UseSuggestion = () => {
	const dispatch = useDispatch()

	const onChangeHandler = (event) => {
		if (!event.target.value) {
			return
		}

		dispatch(searchMovies(event.target.value))
	}

	return {onChangeHandler}
};

export default UseSuggestion;