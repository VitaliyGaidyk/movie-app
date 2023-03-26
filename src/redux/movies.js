import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	results: [],
	hasMore: false,
	totalResults: 0,
	page: 0,
	totalPages: 0,
	isFetching: false,
}

const moviesSlice = createSlice({
	name: '@@moviesSlice',
	initialState,
	reducers: {
		getPopularMovies: (state) => {
			state.isFetching = true
		},
		fetchPopularMovies: (state, action) => {
			state.isFetching = false
			state.results = [...state.results, ...action.payload.results]
			state.hasMore = action.payload.page < action.payload.total_pages
			state.totalResults = action.payload.total_results
			state.page = action.payload.page
			state.totalPages = action.payload.totalPages
		},
		resetState: () => initialState
	}
})

export const {getPopularMovies, fetchPopularMovies, resetState} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer