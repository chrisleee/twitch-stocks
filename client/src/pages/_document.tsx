import Document, { Head, Main, NextScript } from 'next/document';
// import Head from 'next/head';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<{}> {
  public render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <title>Twitch-Stocks</title>
          {styleTags}
        </Head>
        <style>
          {' '}{`
          body {
           margin: 0;
          }
        `}
        </style>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
