import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bambank</title>
        <meta name="description" content="Welcome to Bambank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
