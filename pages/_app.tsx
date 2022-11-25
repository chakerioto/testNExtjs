import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Error from "next/error";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      ></Error>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
