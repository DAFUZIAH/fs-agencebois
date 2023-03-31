import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useState } from 'react';

export default function document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://kit.fontawesome.com/b4b0a611b8.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  )
}