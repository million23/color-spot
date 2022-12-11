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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
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

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Color Spot" />
        <meta
          property="og:description"
          content="Color Detection as a Progressive Web App"
        />
        <meta property="og:site_name" content="Color Spot" />
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
