import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Color Spot</title>
        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Color Spot" />
        <meta name="apple-mobile-web-app-title" content="Color Spot" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/logo/512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="/logo/512.png"
        />
      </Head>

      <main className="flex justify-center">
        <section className="w-full max-w-lg">
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}

export default MyApp;
