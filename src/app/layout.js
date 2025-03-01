import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Bxfundz | Home",
  description:
    "Blog pribadi tentang programming, web development, dan proyek menarik lainnya.",
  metadataBase: new URL("https://bxfundz.my.id"), // Ganti dengan domainmu
  openGraph: {
    title: "Nama Blog",
    description:
      "Blog pribadi tentang programming, web development, dan proyek menarik lainnya.",
    url: "https://bxfundz.my.id",
    siteName: "Nama Blog",
    images: [
      {
        url: "/og-image.png", // Ganti dengan gambar OpenGraph
        width: 1200,
        height: 630,
        alt: "Nama Blog",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nama Blog",
    description:
      "Blog pribadi tentang programming, web development, dan proyek menarik lainnya.",
    images: ["/og-image.png"], // Sama dengan OpenGraph
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar></Navbar>

        <main className="pt-24 bg-light dark:bg-dark">
          <Marquee className="bg-white dark:bg-light" speed={100}>
            Selamat menunaikan ibadah puasa 1446 Hijriyah!
          </Marquee>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
