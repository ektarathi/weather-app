import * as React from 'react';
import { StylesProvider } from "@material-ui/core/styles"; 
import '../assets/styles/owfont.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export interface WeatherProps {
    weatherData: any;
}
 
const Weather: React.SFC<WeatherProps> = ({weatherData}: WeatherProps) => {
    console.log(weatherData);
    const imgURL = `owf owf-${weatherData.weather[0].id} owf-5x owf-border`
    return ( 
        <StylesProvider injectFirst>
            <h2>This is weather</h2>
            <p>{weatherData.weather[0].description}</p>
            <i className={imgURL}></i>
        </StylesProvider>
        
     );
}
 
export default Weather;