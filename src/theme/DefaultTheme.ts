import {createMuiTheme} from "@material-ui/core";

export const createTheme = () => createMuiTheme({
  palette: {
    primary: {
      main: '#D65A31',
      contrastText: '#222831',
    },
    secondary: {
      main: '#393E64',
      contrastText: '#eeeeee'
    }
  },
  typography: {
    fontFamily: [
      "'Comfortaa'",
      'sans-serif'
    ].join(', ')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#222831'
        }
      }
    }
  }
});
