---
title: "Cara setup bahasa pemrograman Java"
date: "2025-01-13"
description: "Kalian ingin mempelajari Java? begini cara install nya!"
img: "/blog-image/blog3.webp"
author: "Bintang"
---

# Cara Setup Pemrograman Java di Windows dan Linux

Dalam tutorial ini, kita akan membahas langkah-langkah untuk menginstal dan mengatur lingkungan pemrograman Java di sistem operasi Windows dan Linux.

## Setup Java di Windows

### 1. Unduh JDK

- Kunjungi [situs resmi Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) untuk mengunduh JDK terbaru.
- Pilih versi JDK yang sesuai dengan arsitektur sistem kamu (x64 atau x86) dan klik unduh.

### 2. Instal JDK

- Jalankan installer JDK yang telah diunduh.
- Ikuti instruksi instalasi dengan menekan tombol "Next" hingga selesai.
- Catat direktori instalasi JDK, biasanya di `C:\Program Files\Java\jdk-xx.x.x`. (xx.x.x artinya versi JDK yang diinstal)
  ![](/blog-image/blog3-1.png)

### 3. Atur PATH Environment Variable

- Buka "System Properties" dengan menekan tombol `Windows + Pause` lalu klik "Advanced system settings".
  ![](https://www.programmerzamannow.com/assets/images/system-properties-5186b1a2356e93ef0ae17cc94708cf54.png)
- Klik "Environment Variables".
- Di bawah "System variables", cari dan pilih variabel `Path`, kemudian klik "Edit".
  ![](https://www.programmerzamannow.com/assets/images/environment-variable-a280b26692dbd14c7c37c51f4dfc1fbb.png)
- Klik "New" dan masukkan path ke folder `bin` dari instalasi JDK, contoh: `C:\Program Files\Java\jdk-xx.x.x\bin`.
- Klik "OK" untuk menyimpan perubahan.

### 4. Verifikasi Instalasi

- Buka Command Prompt (`cmd`) dan ketik `java -version`.
- Jika instalasi berhasil, akan muncul informasi versi Java yang terinstal.

## Setup Java di Linux

### 1. Unduh dan Instal JDK

- Buka terminal dan jalankan perintah berikut untuk mengunduh dan menginstal JDK:

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

Linux sebenarnya sudah support jdk sejak awal, jadi kamu bisa langsung menggunakan perintah di atas untuk memperbarui.

## Extension VSCODE

Bagi kalian yang menggunakan IDE Visual Studio Code, kami sarankan menggunakan extension pack untuk java agar mempermudah pekerjaan kalian saat mengkoding

![](/blogs-img/blog3-2.png)

Selamat mengkoding untuk kalian semua semoga tutorial kali ini bermanfaat,
Adios, salam titik koma;
