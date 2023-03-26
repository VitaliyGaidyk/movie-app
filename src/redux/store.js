import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core'
import watcherSaga from "../sagas";
import {genresReducer} from "./genres";
import {searchReducer} from "./search";
import {moviesReducer} from "./movies";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		search: searchReducer,
		genres: genresReducer,
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({thunk: false}).prepend(sagaMiddleware)
	}
})

sagaMiddleware.run(watcherSaga)

export default store