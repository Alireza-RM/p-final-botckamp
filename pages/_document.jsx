import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <meta name="author" content="Alireza Alaei" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <title>تورینو | رزرو تور و سفر</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
