import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";
//ssr dla postow, dla wall na fb - kazdy ma inne, gdy wejde w moj profil tez mam inne dane niz inni
// _app.tsx to rodzic wszystkich rodzicow
//client to taki cash
const client = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <QueryClientProvider client={client}>
          {/* <p className="text-5xl text-red-500 text-center">eloo</p> */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </CartStateContextProvider>
  );
}
