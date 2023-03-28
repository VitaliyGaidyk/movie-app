import React from 'react';
import {ImageList, ImageListItem, ImageListItemBar, styled, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {IMAGES_PATH} from "../config";
import mapGenres from "../lib/helper";

const ImgStyled = styled("img")({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
})

const ImageListStyled = styled(ImageListItem)({
	overflow: 'hidden',
})

const Movies = (props) => {
	const {movies, genres} = props
	const theme = useTheme()
	const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<ImageList cols={matchDownMd ? 1 : 5} rowHeight={365} gap={12}>
			{
				movies.results.map((movie, index) => (
					<ImageListStyled key={index}>
						<Link to={`/movie/${movie.id}`}>
							{
								movie.poster_path && (
									<ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`}/>
								)
							}
							<ImageListItemBar title={movie.title}
							                  subtitle={<span>{mapGenres(movie.genre_ids, genres)}</span>}/>
						</Link>
					</ImageListStyled>
				))
			}
		</ImageList>
	);
};

export default Movies;