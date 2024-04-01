import { Html, Head, Main, NextScript } from 'next/document'

/**
 * The Document component is a wrapper around the HTML document that Next.js generates. It allows you
 * to customize the content of the document
 * returns The return value of the function is a React element.
 */
export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}