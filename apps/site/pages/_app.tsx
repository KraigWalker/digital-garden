import ***REMOVED*** AppProps ***REMOVED*** from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp(***REMOVED*** Component, pageProps ***REMOVED***: AppProps) ***REMOVED***
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
      </Head>
      <main className="app">
        <Component ***REMOVED***...pageProps***REMOVED*** />
      </main>
    </>
  );
***REMOVED***

export default CustomApp;
