import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <h2>lorum bla bla bla</h2>
      </main>
      <Footer />
    </div>
  );
}
