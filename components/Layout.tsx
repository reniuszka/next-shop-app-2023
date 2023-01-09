import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}
//ten komponent jest zastosowany w _app file i wyswietli sie dla kazdej naszej strony
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* head dodajemy do layout dla seo by dodac title i meta tagi, to zbior metadanych i technk by pomoc przegladarce pomoc przeanalizowac nasza strony by lepiej zostala wyswietlona */}
      <Head>
        <title>Test sklepu </title>
        <meta name="description" content="jakis opis sklepu" />
      </Head>

      <Header />

      <div className="flex-grow">{children}</div>

      <Footer />
    </div>
  );
};
