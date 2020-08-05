import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Weather from "./Weather";
import { key } from '../ApiKey';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
				width: 100
			},
		},
		button: {
			marginTop: 20,
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
	})
);

const APIKEY = key;

export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
	const classes = useStyles();
	const [weather, setWeather] = React.useState([] as any);
	const [city, setCity] = React.useState("");

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setCity(event.target.value as string);
	};

	const getWeather = async (event: any) => {
		event.preventDefault();
		setWeather(
			await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
			)
			.then((res) => res.json())
			.then((data) => data)
		);
	};
    
	return (
		<div>
			<form className={classes.root} onSubmit={getWeather}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">Select City</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={city}
						onChange={handleChange}
					>
						<MenuItem value={"Berlin"}>Berlin</MenuItem>
						<MenuItem value={"Frankfurt"}>Frankfurt</MenuItem>
						<MenuItem value={"Munich"}>Munich</MenuItem>
						<MenuItem value={"Dresden"}>Dresden</MenuItem>
					</Select>
				</FormControl>
				<TextField
					disabled
					id="country-disabled"
					label="Country"
					defaultValue="Germany"
				/>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					type="submit"
				>
					Submit
				</Button>
			</form>
            {weather.length !== undefined ? '' : <Weather weatherData={weather} />}
		</div>
	);
};

export default Form;
