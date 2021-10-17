import React from 'react';
import Head from 'next/head';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '../src/theme/DefaultTheme';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
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
        <title>Patria | autoservis & pneuservis</title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
