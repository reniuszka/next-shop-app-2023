import { Rating } from "./Rating";
import Image from "next/legacy/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import Head from "next/head";
import { NextSeo } from "next-seo";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}
interface ProductDetailsProps {
  data: ProductDetails;
}
//rename symbol do zmienienia nazwy(zaznacz i klik prawym) i powinno z automatu zmienic sie w wielu plikach
export const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
      {/* <Image
        src={data.thumbnailUrl}
        width={500}
        height={300}
        alt={data.thumbnailAlt}
      /> */}
      <div className="bg-white p-12">
        {/* <Head>
          <title>{data.title}</title>
          <meta name="description" content="jakis opis produktu" />
        </Head> */}
        {/* //instead of head we use component next-seo
        < */}
        {/* ctrl i spacja pokazuje mi dostepne opcje, canonical mowi google jakie jest zrodlo prawdy tego produktu czyli 1 prawdziwy link */}
        <NextSeo
          title={data.title}
          description={data.description}
          canonical={`https://naszsklep.vercel.app/products/${data.id}`}
          openGraph={{
            url: `https://naszsklep.vercel.app/products/${data.id}`,
            title: data.title,
            description: data.description,
            images: [
              {
                url: data.thumbnailUrl,
                alt: data.thumbnailAlt,
                type: "image/jpeg",
              },
            ],
            siteName: "SiteName",
          }}
        ></NextSeo>
        <Image
          src={data.thumbnailUrl}
          width="10"
          height="4"
          layout="responsive"
          objectFit="contain"
          alt={data.thumbnailAlt}
        />
      </div>
      <h2 className="p-4 text-3xl font-bold text-purple-900">{data.title}</h2>
      {/* lorem40 */}
      <p className="p-4">{data.description}</p>
      <article className="p-4 prose lg:prose-xl">
        <ReactMarkdown className="p-4">{data.longDescription}</ReactMarkdown>
      </article>
      <div className="p-4">
        <h2>Rating:</h2>
        <Rating rating={data.rating} />
      </div>
    </>
  );
};
//Pick - typ warunkowy, pierwszy argument to nazwa typu z ktorego czerpiemy , drugi - typ pola ktore chcemy wyciagnac title lub thumbanailUrl lub thumbnailAlt
// extract typow => w produktListItem wybieramy tylko niektore keys typow z Product Details nastepujaco:
type ProductListItem = Pick<
  ProductDetails,
  "title" | "thumbnailUrl" | "thumbnailAlt" | "id"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div>
      {/* <Image
        src={data.thumbnailUrl}
        width={500}
        height={200}
        alt={data.thumbnailAlt}
      /> */}
      <div className="bg-white">
        <Image
          src={data.thumbnailUrl}
          width="10"
          height="4"
          // width="0"
          // height="0"
          // sizes="(max-width: 768px) 100vw,
          //       (max-width: 1200px) 50vw,
          //       33vw"
          // className="w-50 h-auto"
          //fill takes the size of the parent component
          layout="responsive"
          objectFit="contain"
          alt={data.thumbnailAlt}
        />
      </div>
      <Link href={`/products/${data.id}/`}>
        <h2 className="p-4 text-3xl font-bold text-yellow-600">{data.title}</h2>
      </Link>
    </div>
  );
};
