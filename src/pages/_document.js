import EVENT_DETAILS from "@/constants/event_details";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const title = 'doc'

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
