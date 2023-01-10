const title = "Nasz Sklep build with Next13";
const description = "Nasz Sklep build with Next13 by reniuszka";

const nextSeoConfig = {
  title,
  description,
  openGraph: {
    title,
    description,
    site_name: "Nasz sklep",
  },
};

export default nextSeoConfig;

//dodamy default seo do _app.tsx by wstrzykiwalo seo na kazda podstrone i jesli potrzeba to moge nadpisac
