import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	genres: [],
	isFetching: false,
}

const genresSlice = createSlice({
	name: '@@genresSlice',
	initialState,
	reducers: {
		getGenres: (state,) => {
			state.isFetching = true
		},
		fetchedGenres: (state, action) => {
			state.isFetching = false
			state.genres = action.payload.genres
		},
		resetState: () => initialState
	}
})

export const {getGenres, fetchedGenres, resetState} = genresSlice.actions

export const genresReducer = genresSlice.reducer