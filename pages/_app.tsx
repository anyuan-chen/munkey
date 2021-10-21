import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { AuthUserProvider } from "../context/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Munkey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>{" "}
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}
export default MyApp;
