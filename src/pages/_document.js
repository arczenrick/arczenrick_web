import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const title = 'Arczenrick'

  return (
    <Html lang="en">
      <Head />
      <title>{title}</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
