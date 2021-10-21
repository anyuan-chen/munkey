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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>{" "}
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}
export default MyApp;
