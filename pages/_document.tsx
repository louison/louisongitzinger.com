import { Analytics } from '@vercel/analytics/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
          <Head>
            <link
                rel="preload"
                href="/fonts/inter-var-latin.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link href="/favicon.ico" rel="shortcut icon" />
            <link
                rel="preconnect"
                href="https://cdn.usefathom.com"
                crossOrigin=""
            />
            <meta content="#ffffff" name="theme-color" />
          </Head>
          <body>
          <Main />
          <NextScript />
          <Analytics />
          </body>
        </Html>
    );
  }
}

export default MyDocument;