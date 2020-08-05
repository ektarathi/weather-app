import * as React from "react";
import WeatherInformation from './shared/WeatherInformation';
import Grid from "@material-ui/core/Grid";

export interface WeatherDataProps {
	text: string; value: string;
}

const WeatherData: React.SFC<WeatherDataProps> = ({text, value}: WeatherDataProps) => {
	return (
		<Grid item xs={12} sm={6}>
			<WeatherInformation text={text} value={value}/>
		</Grid>
	);
};

export default WeatherData;
