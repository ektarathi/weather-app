import * as React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import "../assets/styles/owfont.css";
import Card from "@material-ui/core/Card";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "./Table";

export interface WeatherProps {
	weatherData: any;
}

const Weather: React.SFC<WeatherProps> = ({ weatherData }: WeatherProps) => {
	const [value, setValue] = React.useState("metric");
	// Temperature values
	const fahrenheit = Math.round((weatherData.main.temp * 9) / 5) + 32;
	const celsius = Math.round(weatherData.main.temp);

	const weatherName = weatherData.weather[0].main.toLowerCase();
	const imgURL = `owf owf-${weatherData.weather[0].id} owf-5x`;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	console.log(weatherData);
	return (
		<React.Fragment>
			<RadioGroup
				aria-label="temperature"
				name="city-temperature"
				value={value}
				onChange={handleChange}
				style={{ display: "block" }}
			>
				<FormControlLabel value="metric" control={<Radio />} label="Celsius" />
				<FormControlLabel
					value="imperial"
					control={<Radio />}
					label="Farenheit"
				/>
			</RadioGroup>
			<Card className={`weather-description ${weatherName}`}>
				<Box py={2}>
					<Typography variant="h4" component="h4">
						{weatherData.name}
					</Typography>
					<Typography variant="body1">
						{weatherData.weather[0].description}
					</Typography>
					<Typography variant="h5" component="h5">
						{value === "metric" ? celsius + "°C" : fahrenheit + "°F"}
					</Typography>
				</Box>
				<Box py={2}>
					<i className={imgURL}></i>
				</Box>
				<Table weatherData={weatherData} conversionValue={value}/>
			</Card>
		</React.Fragment>
	);
};

export default Weather;
