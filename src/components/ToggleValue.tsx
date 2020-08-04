import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
export interface ToggleValueProps {
    temperature: any;
}
const ToggleValue: React.SFC<ToggleValueProps> = ({temperature}: ToggleValueProps) => {
    const [value, setValue] = React.useState('metric');
    const handleChange = (event: any) => {
        let fahrenheit = 0;
        if(event.target.value === 'imperial') {
            console.log('entering');
            fahrenheit = (temperature * 9/5) + 32;
            console.log(fahrenheit);
        } else {
            setValue(event.target.value);
        }
        
    };

    console.log(value, temperature);
    return ( 
        <React.Fragment>
            <RadioGroup aria-label="temperature" name="city-temperature" value={value} onChange={handleChange} style={{display: 'block'}}>
                <FormControlLabel value="metric" control={<Radio />} label="Celsius" />
                <FormControlLabel value="imperial" control={<Radio />} label="Farenheit" />
            </RadioGroup>
        </React.Fragment>
     );
}
 
export default ToggleValue;