import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = (props: MainProps) => {
  return (
    <main className="flex-grow w-full px-4 py-2 mx-auto bg-orange-200 text-center grid sm:grid-cols-2 gap-6">
      {props.children}
    </main>
  );
};
