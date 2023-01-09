create project with typescript in this folder where I am: yarn create next-app -- typescript .
start the project: yarn dev
ctrl +shift +P => open simple browser in VSC and paste http://localhost:3000
ctrl +shift +i => dev tools w chromie
-repositorium created on github, and then to add changes:
1.git status modified and untracked (added new files) 2. git diff (to see differences)
a) add files to our repositorium: git add . (adds all files)
aa) git status
ab) git restore --staged package.json (by wycofac plik z naszego lokalnego repozytorium)
ac) git commit -m 'first commit' -> commit tylko w moim lokalnym repozytorium
ad) git log (nowsze commity sa wyzej)
b) push do githuba: git push

2. https://tailwindcss.com/docs/guides/nextjs-> yarn add --dev tailwindcss postcss autoprefixer
   a) autoprefixer dba o to by style dzialaly na starszych przegladarkach
   b) yarn tailwind init -p ->Wygenerować pliki konfiguracyjne TailwindCSS: tailwind.config.js i postcss.config.js
   c) add content
   d) change content in globals.css
   yarn dev

3. yarn add react-query i potem yarn dev by odpalic apke

4. yarn build a potem yarn start by zbuildowac i otworzyc apke

5. yarn add sharp - gdy dodane formats w next.config.ts by optamilizowac pliki, trzeba instalowac ten add sharp - potem yarn build i yarn start by spr czy w trybie produkcyjnym gdy network i headers chce zobaczyc i klik disable cache i click on img buttom next ot css i media)content-type: image/avif - to przegladarka to tak serwuje

6. przed zrobieniem commita zrob nowy branch:
   git checkout -b products (-b -> nowy branch, products -> nazwa, checkout -> wyloguj sie z obecnego)

   check na ktorym branchu jestem: git branch
   git status
   git add .
   git commit -m 'feat: Add products'

   MY NOTES:
   w Request Headers ja wysylam co rozumiem : Accept: image/avif,image/webp,image/apng,image/svg+xml,image/_,_/\*;q=0.8

script : 'dev' w package json to alias na next dev
dependencies - produkcyjne zaleznosci - potrzebne do tworzenie apki produkcyjnej
devDependencies - zaleznosci wspomagajace do pracy tworzenia apki np TS nie jest rozumiany przez przegladarke

create \_document.tsx by np dodac jezyk pl dla html lang='pl' - TEN DOC JEST RENDEROWANY TYLKO 1 RAZ PO STRONIE SERWERA, statyczny szablon

możemy wrócić do pierwszej zakładki przez alt + 1 lub poprzedniej przez ctrl + page up lub następnej ctrl + page down w VSC. Możemy też wyszukać otwarty plik przez ctrl + p.

//najedz ctrl + alt na Footer i widze caly kod

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

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
