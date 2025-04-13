---
title: "Cara memasang tailwindcss v4.1"
date: "2025-04-13"
description: "Tailwind telah update ke versi 4.1 yang banyak sekali perubahan, apa aja?"
img: "/blog-image/blog-5.png"
author: "Bintang"
---

# Cara memasang Tailwind CSS v4.1 di Project Kalian

Tailwindcss merupakan salah satu framework CSS yang paling populer saat ini. Tailwindcss dibuat oleh Adam Wathan dan Jonathan Reinink. Tailwindcss memungkinkan kita untuk membuat desain css dengan lebih mudah dan cepat, karena kita tidak perlu membuat css dari nol. Dengan tailwind kita hanya perlu menuliskan class pada tag html saja tanpa perlu bolak balik ke file css. Tailwindcss saat ini berada di versi 4.1 yang punya cara install yang berbeda dengan versi sebelumnya. Berikut adalah cara install tailwindcss v4.1

## Menggunakan tools vite

- step 1: install tailwindcss dan @tailwindcss/vite via npm (node package manager) atau yarn (yarn package manager) dengan perintah berikut diterminal:

```bash
npm install tailwindcss @tailwindcss/vite

```

- step 2: mengkonfigurasi plugin pada vite.config.js:

```vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- step 3: import tailwindcss ke file index.css (atau file css utama):

```css
@import "tailwindcss";
```

- step 4: menjalankan tailwindcss di localhost:

```bash
npm run dev
```

- step 5: hubungkan file css utama ke file html dan coba untuk menggunakan class utility tailwindcss di html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/src/styles.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

## Menggunakan tailwind cli

- step 1: install tailwindcss dan @tailwindcss/cli via npm (node package manager) atau yarn (yarn package manager) dengan perintah berikut diterminal:

```bash
npm install tailwindcss @tailwindcss/cli

```

- step 2: import tailwindcss ke file input.css (atau file css utama):

```css
@import "tailwindcss";
```

- step 3: menjalankan live compiler tailwindcss:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

- step 4: hubungkan file css utama ke file html dan coba untuk menggunakan class utility tailwindcss di html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

Dengan beberapa cara diatas kita bisa menjalankan tailwindcss v4.1 terbaru di project kita. Sebenarnya masih banyak cara yang bisa kita pakai, jika sempat dan niat saya akan membuatkan tutorial untuk kalian. Semua tutorial akan saya buat dengan cara yang mudah, sederhana dan langsung dari [website resmi tailwindcss](https://tailwindcss.com). Sekian dari saya semoga bermanfaat
