import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	results: [],
	totalResults: 0,
	page: 0,
	totalPages: 0,
	isFetching: false
}

const searchSlice = createSlice({
	name: '@@search',
	initialState,
	reducers: {
		searchMovies: (state) => {
			return {
				...state,
				isFetching: true,
			}
		},
		fetchedSearchMovies: (state, action) => {
			return {
				...state,
				results: action.payload.results,
				totalResults: action.payload.total_results,
				page: action.payload.page,
				totalPages: action.payload.total_pages,
				isFetching: false,
			}
		},
		resetState: () => initialState
	}
})

export const {searchMovies, fetchedSearchMovies, resetState} = searchSlice.actions

export const searchReducer = searchSlice.reducer