import React from 'react';
import {Grid, MenuItem, Paper, styled, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {searchMovies} from "../redux/search";
import Downshift from "downshift";
import {Link} from "react-router-dom";
import {COVER_PLACEHOLDER, IMAGES_PATH} from "../config";
import mapGenres from "../lib/helper";

const PaperStyled = styled(Paper)({
	backgroundColor: 'darkgoldenrod',
	top: -40,
	position: "relative",
})

const MenuItemStyled = styled(MenuItem)({
	paddingTop: 5,
	paddingBottom: 5,
})

const ImageStyled = styled('img')({
	height: '100%',
})

const LinkStyled = styled(Link)({
	display: 'block',
	textDecoration: 'none',
})

const TitleStyle = styled(Typography)({
	color: 'black',
	paddingTop: 10
})

const CaptionStyle = styled(Typography)({
	color: 'black',
})

const Suggestion = (props) => {
	const {movies, genres} = props
	const dispatch = useDispatch()

	const onChangeHandler = (event) => {
		if (!event.target.value) {
			return
		}

		dispatch(searchMovies(event.target.value))
	}
	return (
		<Downshift>
			{({
				  getInputProps,
				  getItemProps,
				  getMenuProps,
				  isOpen,
				  inputValue,
				  highlightedIndex,
				  selectedItem,
			  }) => (
				<div>
					<TextField
						id='search'
						placeholder='Search'
						fullWidth={true}
						sx={{mb: 5}}
						variant='standard'
						InputProps={{
							...getInputProps({
								onChange: onChangeHandler
							}),
						}}
					/>
					{
						isOpen ? <PaperStyled square={true} {...getMenuProps()}>
							{movies.results
								.slice(0, 10)
								.filter((item) => !inputValue || item.title
									.toLowerCase()
									.includes(inputValue.toLowerCase())
								).map((item, index) => (
									<MenuItemStyled {...getItemProps({
										item,
										key: item.id,
										selected: highlightedIndex === index,
										style: {
											fontWeight: selectedItem === item ? 500 : 400
										}
									})}>
										<LinkStyled to={`/movie/${item.id}`}>
											<Grid container={true} spacing={8}>
												<Grid item={true}>
													{item.poster_path ? (
														<ImageStyled src={`${IMAGES_PATH}/w92${item.poster_path}`} alt=""/>
													) : (
														<ImageStyled src={COVER_PLACEHOLDER} alt=""/>
													)}
												</Grid>
												<Grid item={true}>
													<TitleStyle variant='h4'>
														{item.title}
													</TitleStyle>
													<CaptionStyle variant='caption'>
														{mapGenres(item.genre_ids, genres)}
													</CaptionStyle>
												</Grid>
											</Grid>
										</LinkStyled>
									</MenuItemStyled>
								))
							}
						</PaperStyled> : null
					}
				</div>
			)}
		</Downshift>
	);
};

export default Suggestion;