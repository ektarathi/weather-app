import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Form from './components/Form';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg" style={{textAlign: 'center'}}>
				<Typography component="h4" variant="h4" color="primary" align="center">
          Weather Forecast
        </Typography>
        <Form />
			</Container>
		</React.Fragment>
	);
}

export default App;
