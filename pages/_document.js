import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script type="text/javascript" src='/static/flowbite.min.js' strategy='beforeInteractive' />

      </body>
    </Html>
  )
}


