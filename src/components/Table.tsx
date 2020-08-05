import * as React from 'react';
import {
	makeStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WeatherData from "./WeatherData";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	})
);
export interface TableProps {
    weatherData: any;
    conversionValue: string;
}
 
const Table: React.SFC<TableProps> = ({weatherData, conversionValue}: TableProps) => {
    const classes = useStyles();
    const [sunrise, setSunrise] = React.useState("");
    const [sunset, setSunset] = React.useState("");
    
    const fahrenheit = Math.round((weatherData.main.feels_like * 9) / 5) + 32;
    const celsius = Math.round(weatherData.main.feels_like);
    
    React.useEffect(() => {
		let sunrise = calculateTime(weatherData.sys.sunrise);
		let sunset = calculateTime(weatherData.sys.sunset);
		setSunrise(sunrise);
		setSunset(sunset);
	}, [weatherData.sys.sunrise, weatherData.sys.sunset]);

	const calculateTime = (value: any) => {
		let date = new Date(value * 1000);
		let hours = date.getHours();
		let minutes = "0" + date.getMinutes();
		let formattedTime = hours + ":" + minutes.substr(-2);
		return formattedTime;
    };
    
    return ( 
        <div className={classes.root}>
            <Grid container spacing={1}>
                <WeatherData text="Sunrise" value={sunrise} />
                <WeatherData text="Sunset" value={sunset} />
                <WeatherData
                    text="Feels Like"
                    value={conversionValue === "metric" ? celsius + "°C" : fahrenheit + "°F"}
                />
                <WeatherData text="Wind" value={weatherData.wind.speed + " m/s"} />
                <WeatherData text="Latitude" value={weatherData.coord.lat} />
                <WeatherData text="Longitude" value={weatherData.coord.lon} />
                <WeatherData
                    text="Humidity"
                    value={weatherData.main.humidity + "%"}
                />
                <WeatherData
                    text="Pressure"
                    value={weatherData.main.pressure + " hPa"}
                />
            </Grid>
        </div>
     );
}
 
export default Table;