---
title: "Custom Styles Tailwind v4.1"
date: "2025-04-14"
description: "Tailwind telah update ke versi 4.1 yang banyak sekali perubahan, apa aja?"
img: "/blog-image/blog-5.png"
author: "Bintang"
---

# Cara custom styles tailwind v4.1

Kemarin kita sudah belajar tentang [cara memasang tailwindcss v4.1](https://bxfundz.my.id/blog/cara-memasang-tailwindcss-v4-1), sekarang kita lanjut lagi untuk belajar tentang cara custom styles tailwind v4.1. Tailwindcss adalah framework css yang sangat populer karena sangat mudah digunakan dan sangat fleksibel dengan class utilitynya.

Dengan tailwindcss kita cukup menuliskan style css di file html saja tanpa harus bolak balik ke file CSS. Contohnya

```html
<div class="pt-1 bg-red-600 text-white font-semibold">
  <h1 class="py-2">Hello World</h1>
</div>
```

Nah namun ada permasalahan baru, yaitu bagaimana kalo kita mau menggunakan warna atau style lain yang tidak tersedia di class utility bawaan tailwind? maka dari itu kita membutuhkan custom style tailwind. Pada versi sebelumnya custom tailwind cukup dilakukan di file 'tailwind.config.js'. Pada v4.1 ini kita dipermudah, kenapa? sekarang untuk custom style kita cukup menambahkan variabel pada file css utama atau file yang ada

```css
@import "tailwindcss";
```

bagaimana caranya?

```css
@import "tailwindcss";

@theme {
  /* disini kita menambah variabel */
  --color-primary: #3498db; /* kita menambahkan variabel primary dengan value #3498db */
  --color-secondary: #f1c40f; /* kita menambahkan variabel secondary dengan value #f1c40f */

  --font-judul: "Inter", sans-serif; /* kita menambahkan variabel font judul dengan value Inter */

  --animate-spin-slow: spin 5s linear infinite; /* kita menambahkan variabel animate spin slow dengan value animation */
}
```

Dan di file html kita hanya perlu menulis:

```html
<div class="pt-1 bg-primary text-secondary font-semibold">
  <h1 class="py-2 font-judul ">Hello World</h1>
  <span class="h-20 w-20 bg-red-900 animate-spin-slow"></span>
</div>
```
