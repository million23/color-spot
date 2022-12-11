import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="flex justify-center">
        <section className="w-full max-w-lg">
          <Component {...pageProps} />
        </section>
      </main>
    </>
  );
}

export default MyApp;
