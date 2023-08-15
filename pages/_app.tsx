import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

// import "@/public/css/home.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Website Name</title>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="description" content="Paragraph" />
        <meta name="keywords" content="Paragraph" />
        <meta name="author" content="Names" />
        <meta property="og:title" content="Website Name" />
        <meta property="og:url" content="Website URL" />
        <meta property="og:image" content="Website Image" />
      </Head>
      <NextNProgress
        color="linear-gradient(to right, hsl(0, 100%, 66%), hsl(0, 100%, 71%))"
        options={{ showSpinner: false }}
      />
      <main>
        <Container className="my-5" style={{ marginTop: 50 }}>
          <Component {...pageProps} />
        </Container>
      </main>
    </SessionProvider>
  );
}