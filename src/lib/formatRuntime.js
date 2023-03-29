const formatRuntime = (runtime) => {
	const hours = Math.floor(runtime / 60) + 'h'
	const minutes = (runtime % 60) + 'm'

	return [`${hours} ${minutes}`]
}

export default formatRuntime;