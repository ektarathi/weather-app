import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Form from './components/Form';
import { StylesProvider  } from "@material-ui/core/styles"; 

import './App.css';

function App() {
	return (
		<React.Fragment>
      <StylesProvider>
        <CssBaseline />
        <Container maxWidth="lg" className="app">
          <Typography component="h4" variant="h4">
            Weather Forecast
          </Typography>
          <Form />
        </Container>
      </StylesProvider>
		</React.Fragment>
	);
}

export default App;
