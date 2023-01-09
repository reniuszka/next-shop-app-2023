import ActiveLink from "./ActiveLink";

export const Header = () => {
  return (
    <header className="bg-pink-400 max-w-5xl w-full mx-auto ">
      <nav className="bg-purple-100 max-w-md w-full px-4 py-2 mx-auto flex gap-4">
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link> */}
        <ActiveLink href="/" name="Home" />
        <ActiveLink href="/about" name="About" />
        <ActiveLink href="/ssg_products" name="SSG PRODUCTS" />
        <ActiveLink href="/csr_products" name="CSR PRODUCTS" />
      </nav>
    </header>
  );
};
