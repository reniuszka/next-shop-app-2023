import Link from "next/link";
// import ReactMarkdown from "react-markdown";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "../utils";
//gdy szukamy zewnetrznego linku w markdownie
const externalLinkRegex = "@https|http|ftp|mailto|file";
const ZaisteReactMarkdown = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          //jesli nie ma href
          if (!href) {
            return <a {...props}></a>;
            // zewnetrzny link bo ich nie trzeba wrapowac w Link
          } else if (href.match(externalLinkRegex)) {
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
            return (
              <Link href={href}>
                <a {...props}></a>
              </Link>
            );
          }
        },
      }}
    ></MDXRemote>
  );
};

//react markdown generowany jest na kliencie, np najlepiej to uzywac gdy dostajemy na biezaco markdown ktorego nie mozemy wygenerowac za wczasu
// const ZaisteReactMarkdown = ({ children }: { children: string }) => {
//   return (
//     <ReactMarkdown
//       className="p-4"
//       components={{
//         a: ({ href, ...props }) => {
//           //jesli nie ma href
//           if (!href) {
//             return <a {...props}></a>;
//             // zewnetrzny link bo ich nie trzeba wrapowac w Link
//           } else if (href?.match(externalLinkRegex)) {
//             return (
//               <a
//                 href={href}
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 {...props}
//               ></a>
//             );
//             // wewnetrzny link
//           } else {
//             return <Link href={href} {...props}></Link>;
//           }
//         },
//       }}
//     >
//       {children}
//     </ReactMarkdown>
//   );
// };

export default ZaisteReactMarkdown;
