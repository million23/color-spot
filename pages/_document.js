import Document, { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <title>Color Spot</title>
        <meta name="description" content="PWA app for color detection" />
        {/* <meta name="keywords" content="Keywords" /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <link rel="manifest" href="/manifest.json" />
//           <meta name="theme-color" content="#fff" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
