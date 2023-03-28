import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline, styled} from "@mui/material";
import {Link} from "react-router-dom";
import Logo from "../logo.svg"
import SearchMovie from "../containers/SearchMovie";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	}
})

const Img = styled('img')({
	marginLeft: 'auto',
	marginRight: 'auto',
	display: 'block',
	width: 500,
	maxWidth: '100%',
})

const LayoutWrapper = styled('div')(({theme}) => ({
	margin: 24,
	width: "auto",
	[theme.breakpoints.up('lg')]: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: theme.breakpoints.values.lg
	}
}));


const Layout = (props) => {
	const {children} = props

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline/>
			<LayoutWrapper>
				<Link to="/">
					<Img src={Logo} alt=""/>
				</Link>
				<SearchMovie/>
				{children}
			</LayoutWrapper>
		</ThemeProvider>
	);
};

export default Layout;