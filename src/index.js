import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  overrides: {

    MuiOutlinedInput: { // Name of the component ⚛️ / style sheet
          root: { // Name of the rule
            "& $notchedOutline": {
               borderColor: "#2196f3"
             },
             "&:hover $notchedOutline": {
               borderColor: "#2196f3"
             },
             "&$focused $notchedOutline": {
               borderColor: "#2196f3"
             }

          }
        },


        MuiDialogTitle: {
          root: {
            background: "#ffb700"
          }
        },

        MuiTypography: {
          colorTextSecondary:{
            color: "#000000"
          }



        }
}});


ReactDOM.render((
<Router>
<ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </Router>
), document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
