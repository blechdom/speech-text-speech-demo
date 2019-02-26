import React, { Component } from 'react';
import SynthesisSelect from './SynthesisSelect';
import LanguageSelect from './LanguageSelect';
import GenderSelect from './GenderSelect';
import MicButton from './MicButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import 'typeface-roboto';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <div className="speech-to-text">
          <Paper>
            <Grid container spacing={24}>
              <Grid item xl>
                  <LanguageSelect />
                  <SynthesisSelect />
                  <GenderSelect />
              </Grid>
              <Grid item xs>
                <MicButton />
              </Grid>
          </Grid>
        </Paper>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
