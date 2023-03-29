import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import {IMAGES_PATH, COVER_PLACEHOLDER} from "../config";
import Movies from "./Movies";
import formatRuntime from "../lib/formatRuntime";

const GridStyled = styled(Grid)(({theme}) => ({
	marginBottom: theme.spacing(3)
}))

const ImgStyled = styled("img")({
	width: "100%",
})
const Movie = (props) => {
	const {movie, genres} = props

	return (
		<>
			<GridStyled container={true} spacing={2}>
				<Grid item={true} md={3}>
					{
						movie.poster_path ? <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`} alt=""/>
							: <ImgStyled src={COVER_PLACEHOLDER} alt=""/>
					}
				</Grid>
				<Grid item={true} md={9}>
					<Typography component='h1' variant='h3' gutterBottom={true}>
						{movie.title}
					</Typography>
					{
						movie.tagline && (
							<>
								<Typography component='h3' variant='h6'>
									Tagline:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{movie.tagline}
								</Typography>
							</>
						)
					}
					{
						movie.genres && (
							<>
								<Typography component='h3' variant='h6'>
									Genres:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{movie.genres.map((genre) => genre.name).join(', ')}
								</Typography>
							</>
						)
					}
					{
						movie.production_countries && (
							<>
								<Typography component='h3' variant='h6'>
									Country:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{movie.production_countries.map((country) => country.name).join(', ')}
								</Typography>
							</>
						)
					}
					{
						movie.runtime && (
							<>
								<Typography component='h3' variant='h6'>
									Country:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{formatRuntime(movie.runtime)}
								</Typography>
							</>
						)
					}
					{
						movie.release_date && (
							<>
								<Typography component='h3' variant='h6'>
									Release date:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{new Date(movie.release_date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</Typography>
							</>
						)
					}
					{
						movie.overview && (
							<>
								<Typography component='h3' variant='h6'>
									Overview:
								</Typography>
								<Typography variant='body1' gutterBottom={true}>
									{movie.overview}
								</Typography>
							</>
						)
					}
				</Grid>
			</GridStyled>
			{
				movie.recommendations && (
					<>
						<Typography component='h2' variant='h4' gutterBottom={true}>
							Recommendations
						</Typography>
						<Movies movies={movie.recommendations} genres={genres}/>
					</>
				)
			}
		</>
	);
};

export default Movie;