import {createMuiTheme, fade} from '@material-ui/core';

export const createTheme = () => {
  const baseTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#D65A31',
        contrastText: '#222831',
      },
      secondary: {
        main: '#393E64',
        contrastText: '#eeeeee',
      },
    },
    typography: {
      fontFamily: ["'Comfortaa'", 'sans-serif'].join(', '),
      fontWeightBold: 700,
    },
  });
  return createMuiTheme({
    palette: {
      background: {
        default: baseTheme.palette.primary.contrastText,
      },
      text: {
        primary: baseTheme.palette.secondary.contrastText,
      },
      divider: fade(baseTheme.palette.secondary.main, 0.4)
    },
    typography: {
      fontFamily: ["'Comfortaa'", 'sans-serif'].join(', '),
      fontWeightBold: 700,
      h1: {
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: baseTheme.typography.pxToRem(40)
        }
      },
      h3: {
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: baseTheme.typography.pxToRem(32)
        }
      },
      body2: {
        fontFamily: ['"Montserrat"', '"Comfortaa"', 'sans-serif'].join(', ')
      }
    },
  });
};
