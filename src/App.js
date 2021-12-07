//add the following into package.json
//npm run build
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { Landing, MidtermUpdate, ProjectVideo, FinalUpdate, Proposal, References } from './pages';

import styles from './App.css';

const theme = createMuiTheme({
  palette: {
      primary: {
          // light: will be calculated from palette.primary.main,
          main: '#000000',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
          main: '#FCFFFF',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
  },
  typography: {
      fontFamily: [
          '"Space Mono"',
          // 'Ubuntu',
          // 'MuseoModerno',
          // 'Notable',
          // '"Space Mono"',
          // 'Roboto',
          // '"Helvetica Neue"',
          // 'Arial',
          // 'sans-serif',
          // '"Apple Color Emoji"',
          // '"Segoe UI Emoji"',
          // '"Segoe UI Symbol"',
        ].join(','),
    },
});

class App extends React.Component {
  render() {
      return (
          <main>
              <ThemeProvider theme={theme}>
                  <Switch>
                      <Route exact path={`/`} component={Landing} /*exact*/ />
                      <Route exact path={`/proposal`} render={() => <Proposal/>} />
                      <Route exact path={`/midtermUpdate`} render={() => <MidtermUpdate/>} />
                      <Route exact path={`/finalUpdate`} render={() => <FinalUpdate/>} />
                      <Route exact path={`/projectVideo`} render={() => <ProjectVideo/>} />
                      <Route exact path={`/references`} render={() => <References/>} />
                  </Switch>
              </ThemeProvider>
          </main>
      )
  }
}
export default App;