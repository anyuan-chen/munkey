import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import AuthContext from "../util/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    user: undefined,
    update,
  });

  function update(data) {
    setState(Object.assign({}, state, data));
  }
  return (
    <>
      <Head>
        <title>Munkey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>{" "}
      <AuthContext.Provider value={state}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
}
export default MyApp;
