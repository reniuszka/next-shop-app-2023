import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductDetails, ProductListItem } from "../components/Product";
// import { Rating } from "../components/Rating";
import { Main } from "../components/Main";
// import Image from "next/image";
import { ReactNode } from "react";
//najedz alt na Footer i widze caly kod

const DATA = {
  id: 0,
  title: "nazwa obrazka jestttt",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          debitis blanditiis harum ipsum numquam voluptas totam fuga ab enim.
          Eum, tenetur repudiandae aliquam quisquam sit aspernatur nemo modi
          provident dolor cumque cupiditate nulla blanditiis distinctio quis
          eligendi, dicta exercitationem quaerat`,
  thumbnailUrl: `/images/blindsoccer.jpg`,
  thumbnailAlt: `blindfootball a ball for all`,
  rating: 4.5,
};
// interface RatingProps {
//   rating: number;
// }
// const Rating = (props: RatingProps) => {
//   return <div className="text-blue-700 font-bold">{props.rating}</div>;
// };

// ctrl+spacja i nam podpowiada jaki parametr wziac z destruktyryzacji
// const Rating = ({ rating }: RatingProps) => {
//   return <div className="text-blue-700 font-bold">{rating}</div>;
// };

// interface ProductProps {
//   data: {
//     description: string;
//     thumbnailUrl: string;
//     thumbnailAlt: string;
//     rating: number;
//   };
// }
// const Product = ({ data }: ProductProps) => {
//   return (
//     <>
//       <Image
//         src={data.thumbnailUrl}
//         width={500}
//         height={500}
//         alt={data.thumbnailAlt}
//       />
//       {/* lorem40 */}
//       <p>{data.description}</p>
//       <Rating rating={data.rating} />
//     </>
//   );
// };

// interface MainProps {
//   children: ReactNode;
// }

// const Main = (props: MainProps) => {
//   return (
//     <main className="flex-grow w-full px-4 py-2 mx-auto bg-orange-200 text-center grid sm:grid-cols-2 gap-6">
//       {props.children}
//     </main>
//   );
// };

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-800">
      <Header />
      <Main>
        <ProductListItem data={DATA} />
        {/* <ProductDetails data={DATA} /> */}
      </Main>
      {/* <main className="flex-grow w-full px-4 py-2 mx-auto bg-orange-200 text-center grid sm:grid-cols-2 gap-6">
        <Product data={DATA} /> */}
      {/* <Image
          src={DATA.thumbnailUrl}
          width={500}
          height={500}
          alt={DATA.thumbnailAlt}
        />
        {/* lorem40 */}
      {/* <p>{DATA.description}</p>
        <Rating rating={DATA.rating} /> */}
      {/* </main> */}
      <Footer />
    </div>
  );
}
