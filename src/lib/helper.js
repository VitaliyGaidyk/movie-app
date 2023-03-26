const mapGenres = (genreIds, genres) => {

	const genresMap = genres.reduce((result, current) => {
		result[current.id] = current.name

		return result
	}, {})

	return genreIds.map((id) => genresMap[id]).join(', ')
};

export default mapGenres;