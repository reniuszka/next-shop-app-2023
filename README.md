create project with typescript in this folder where I am: yarn create next-app -- typescript .
start the project: yarn dev
ctrl +shift +P => open simple browser in VSC and paste http://localhost:3000
-repositorium created on github, and then to add changes:
1.git status modified and untracked (added new files) 2. git diff (to see differences)
a) add files to our repositorium: git add . (adds all files)
aa) git status
ab) git restore --staged package.json (by wycofac plik z naszego lokalnego repozytorium)
ac) git commit -m 'first commit' -> commit tylko w moim lokalnym repozytorium
ad) git log
b) push do githuba
MY NOTES:

script : 'dev' w package json to alias na next dev
dependencies - produkcyjne zaleznosci - potrzebne do tworzenie apki produkcyjnej
devDependencies - zaleznosci wspomagajace do pracy tworzenia apki np TS nie jest rozumiany przez przegladarke

create \_document.tsx by np dodac jezyk pl dla html lang='pl' - TEN DOC JEST RENDEROWANY TYLKO 1 RAZ PO STRONIE SERWERA, statyczny szablon

ctrl shift i -> inspekt

https://tailwindcss.com/docs/guides/nextjs

1.add tailwind:(autoprefixer dba o to by style dzialaly na starszych przegladarkach)
yarn add --dev tailwindcss postcss autoprefixer

2. Wygenerować pliki konfiguracyjne TailwindCSS: tailwind.config.js i postcss.config.js:

yarn tailwind init -p 3. add content 3. change content in globals.css
yarn dev

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
