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
        <title>Patria</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap'
              rel='stylesheet' />
        <link rel='apple-touch-icon' sizes='180x180' href='/img/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/img/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/img/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/img/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/img/favicon/safari-pinned-tab.svg' color='#d65a31' />
        <link rel='shortcut icon' href='/img/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#d65a31' />
        <meta name='msapplication-config' content='/img/favicon/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
