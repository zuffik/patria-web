import React from 'react';
import Head from "next/head";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "../src/theme/DefaultTheme";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  const theme = React.useMemo(() => createTheme(), []);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Patria</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"/>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps}/>
      </MuiThemeProvider>
    </>
  )
}
