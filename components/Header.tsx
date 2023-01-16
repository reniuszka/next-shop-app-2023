import ActiveLink from "./ActiveLink";
import { CartNavbar } from "./Cart/CartNavbar";

export const Header = () => {
  return (
    <header className="bg-pink-400 max-w-5xl w-full mx-auto flex items-center justify-between px-4">
      <nav className="max-w-md w-full py-2 mx-auto flex gap-4">
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link> */}
        <ActiveLink href="/" name="Home" />
        <ActiveLink href="/about" name="About" />
        <ActiveLink href="/ssg_products" name="SSG PRODUCTS" />
        <ActiveLink href="/csr_products" name="CSR PRODUCTS" />
      </nav>
      <CartNavbar />
    </header>
  );
};
