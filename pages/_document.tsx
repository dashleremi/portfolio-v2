import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/logo-new.png"/>
      <body className="font-secondary bg-[#f4f4f4]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
