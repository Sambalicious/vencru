import "@/styles/globals.scss";

import type { AppProps } from "next/app";

import Head from "next/head";
import { Toaster } from "react-hot-toast";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "react-responsive-modal/styles.css";
import { NextPageWithLayout } from "../types/page";

dayjs.extend(advancedFormat);

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>Radio School admin </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            paddingInline: "1rem",
          },
          success: {
            style: {
              background: "#0BCE5A",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#FF1B03",
              color: "#fff",
            },
          },
        }}
      />

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
