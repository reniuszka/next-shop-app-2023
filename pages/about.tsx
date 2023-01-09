import React from "react";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
//wyrazenie funkcyjne
const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      <Header />
      {/* Jako „dziecko” w React możemy przekazywać nie tylko inne elementy, ale też */}
      {/* np. ciąg znaków czy React Fragment. */}
      <Main>hi youuu</Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
