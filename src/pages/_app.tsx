import "@/styles/globals.scss";

import { NavProvider } from "contexts/nav";
import type { AppProps } from "next/app";
import Head from "next/head";

import { NextPageWithLayout } from "../types/page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>Vencru</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <NavProvider>{getLayout(<Component {...pageProps} />)}</NavProvider>
    </>
  );
}

export default MyApp;
