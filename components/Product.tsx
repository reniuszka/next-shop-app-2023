import { Rating } from "./Rating";
import Image from "next/legacy/image";
import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import Head from "next/head";
import { NextSeo } from "next-seo";
import ZaisteReactMarkdown from "./ZaisteReactMarkdown";
// import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MarkdownResult } from "../utils";
import { useCartState } from "./Cart/CartContext";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: MarkdownResult;
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
        {/* https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fnext-shop-app-2023-git-seo-reniuszka.vercel.app%2Fproducts%2F6fbe024f-2316-4265-a6e8-d65a837e308a */}
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
        {/* cel wrapujemy linki w markdownie by nie odswiezalo calej strony tylko by js je podbralo. mamy prop o nazwie component i pozwala nam mapowac, jak znajdziesz a to fykonaj dana funckje */}
        {/* moved ZAISTEMARKDOWN to new component */}
        {/* <ReactMarkdown
          className="p-4"
          components={{
            a: ({ href, ...props }) => {
              //jesli nie ma href
              if (!href) {
                return <a {...props}></a>;
                // zewnetrzny link bo ich nie trzeba wrapowac w Link
              } else if (href?.match(externalLinkRegex)) {
                return (
                  <a
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    {...props}
                  ></a>
                );
                // wewnetrzny link
              } else {
                return <Link href={href} {...props}></Link>;
              }
            },
          }}
        >
          {data.longDescription}
        </ReactMarkdown> */}
        {/* MDXRemote zostal wrzucony do zaisteReactMarkdown */}
        <ZaisteReactMarkdown>{data.longDescription}</ZaisteReactMarkdown>
        {/* zamiast tego powyzej uzywam mdxremote bo on sie nie wykona na kliencie tylk0 w node za wczasu */}
        {/* <MDXRemote {...data.longDescription} /> */}
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
  const cartState = useCartState();
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
      <div className="p-4">
        <Link href={`/products/${data.id}/`}>
          <h2 className="pb-4 text-3xl font-bold text-yellow-600">
            {data.title}
          </h2>
        </Link>
        {/* lazy and eager: my chcemy by sie wykowanala funkcja w momencie klik i dopiero wtedy wykona sie to co jest w srodku. przekazujemy do onClick funkcje ktora wykona nasz fcje z contextu i chcemy przekazac item */}
        {/* gdybysmy ta funkcje zapisali tak to wykonala by sie ona w czasie renderowania komponentu i dupa : onClick={cartState.addItemToCart()};
          }} */}

        <button
          onClick={() => {
            cartState.addItemToCart({
              id: data.id,
              price: 21.09,
              title: data.title,
              count: 1,
            });
          }}
          className="text-white bg-gradient-to-tr from-purple-800 p-4 border-4 border-purple-800 rounded-lg text-sm text-center m-2"
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};
