import React, { Fragment } from 'react';
// types
import type { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;