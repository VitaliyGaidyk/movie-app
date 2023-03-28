import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	recommendations: {
		results: [],
		hasMore: false,
		totalResults: 0,
		page: 0,
		totalPages: 0,
		isFetching: false,
	}
}

const movieSlice = createSlice({
	name: '@@movieSlice',
	initialState,
	reducers: {
		getMovie: (state) => {
			state.isFetching = true
		},
		fetchMovie: (state, action) => {
			return {
				...action.payload,
				recommendations: {
					...action.payload.recommendations,
					results: action.payload.recommendations.results.slice(0, 10)
				},
				isFetching: false
			}
		},
		resetMovie: () => initialState,
	}
})

export const {getMovie, fetchMovie, resetMovie} = movieSlice.actions

export const movieReducer = movieSlice.reducer