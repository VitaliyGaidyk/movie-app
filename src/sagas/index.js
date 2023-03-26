import {delay, put, call, all, takeLatest, takeEvery} from "redux-saga/effects";
import {fetchedSearchMovies, searchMovies} from "../redux/search";
import {API_KEY} from "../config";
import TheMovieDbApi from "../lib/api";
import {fetchedGenres, getGenres} from "../redux/genres";
import {fetchPopularMovies, getPopularMovies} from "../redux/movies";

const api = new TheMovieDbApi(API_KEY)

function* fetchGenre() {
	yield put(fetchedGenres(yield call(api.getGenres)))
}

function* fetchSearchMovies(action) {
	yield delay(500)

	yield put(fetchedSearchMovies(yield call(api.searchMovies, action.payload)))
}

function* fetchPopularMovie(action) {
	yield put(fetchPopularMovies(yield call(api.getPopularMovies, action.payload)))
}

export default function* watcherSaga() {
	yield all([
		yield takeEvery(getPopularMovies.type, fetchPopularMovie),
		yield takeEvery(getGenres.type, fetchGenre),
		yield takeLatest(searchMovies.type, fetchSearchMovies),
	])
}