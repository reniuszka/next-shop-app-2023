//tworzymy aliasy na dlugie typy
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>>;
// gdybym chciala uzyc react mardown wystarczy zmienic typ
// export type MarkdownResult = string;
