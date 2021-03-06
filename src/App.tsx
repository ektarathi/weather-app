import React from "react";
import { Helmet } from "react-helmet";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Form from "./components/Form";
import {
	StylesProvider,
	Theme,
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./App.css";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainContent: {
			color: "#fff",
			backgroundColor: "#3f51b5",
		},
	})
);

function App() {
	const classes = useStyles();
	return (
		<div className="app">
			<Helmet>
				<title>Weather App</title>
				<meta
					name="description"
					content="Weather information of Teraki Office"
				/>
				<meta
					name="keywords"
					content="teraki weather, teraki office location"
				/>
			</Helmet>
			<StylesProvider>
				<Container maxWidth="lg" className="app">
					<Paper elevation={1} className={classes.mainContent}>
						<Box py={2}>
							<Typography component="h4" variant="h4">
								Weather Forecast of Teraki Offices
							</Typography>
						</Box>
						<Box pb={2}>
							<Typography variant="body1">
								Welcome to My Office. We have our offices located in Berlin,
								Frankfurt and Munich.
								<br />
								<i> Note: Dresden office is opening soon.</i>
							</Typography>
						</Box>
					</Paper>
					<Form />
				</Container>
			</StylesProvider>
		</div>
	);
}

export default App;
