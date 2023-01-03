import "../styles/globals.css";
import type { AppProps } from "next/app";

// _app.tsx to rodzic wszystkich rodzicow

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <p className="text-5xl text-red-500 text-center">eloo</p>
      <Component {...pageProps} />
    </>
  );
}
