// Next Modules
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import Head from "next/head";

// Navigations
import Header from "@/components/navigation/Header";
import SideNavigation from "@/components/navigation/SideNavigation";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/main.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Website Name</title>
        <link rel="shortcut icon" href="/images/kayquit-logo.png" />
        <meta name="description" content="Paragraph" />
        <meta name="keywords" content="Paragraph" />
        <meta name="author" content="Names" />
        <meta property="og:title" content="Website Name" />
        <meta property="og:url" content="Website URL" />
        <meta property="og:image" content="Website Image" />
      </Head>
      <NextNProgress
        color="linear-gradient(to right, hsl(224, 94%, 41%), hsl(224, 94%, 21%))"
        options={{ showSpinner: false }}
      />
      <Header />
      <main>
        <SideNavigation />
        <section className="content px-3">
          <Component {...pageProps} />
        </section>
      </main>
    </SessionProvider>
  );
}