import React from 'react';
import Head from 'next/head';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '../src/theme/DefaultTheme';
import Script from "next/script";

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, string>;
}

export default function App(props: AppProps): JSX.Element {
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
      {
        process.env.GA_MEASUREMENT_ID && (
          <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}/>
            <Script strategy="lazyOnload">
              {
                `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.GA_MEASUREMENT_ID}');
                    `
              }
            </Script>
          </>
        )
      }
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
