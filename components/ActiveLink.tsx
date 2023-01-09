import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProp {
  href: string;
  name: string;
}
// https://nextjs.org/docs/api-reference/next/router
const ActiveLink = ({ href, name }: ActiveLinkProp) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={router.pathname === href ? "text-blue-700 font-bold" : ""}
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
