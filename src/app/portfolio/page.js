"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "Alya Roshidere Wiki",
      link: "https://byntangxyz.github.io/alya-roshidere/",
      image: "/portfolio/Alya.png",
      description:
        "Project html pertama saya tanpa framework apapun. Disini memuat informasi tentang Alissa Mikhailovna Kujuo atau Alya dari anime Roshidere.",
    },
    {
      title: "Website Kelas SIJA ARC",
      link: "https://sijaarc.vercel.app",
      image: "/portfolio/Sijaarc.png",
      description:
        "Website kelas yang saya buat bersama teman sekelas. Website ini berisi informasi tentang kelas SIJA ARC dan dibuat dengan NextJs.",
    },
    {
      title: "Hololive ID Gen 3 Web",
      link: "https://hololive-id-gen3.vercel.app",
      image: "/portfolio/holoidg3.png",
      description:
        "Karena saya ketagihan react, akhirnya saya membuat web ini karena gabut. Ini adalah website berisi talent dan informasinya dari Hololive ID Gen 3.",
    },
    {
      title: "BxNime Anime List",
      link: "",
      image: "/portfolio/bxnime.png",
      description:
        "Website anime list dengan menggunakan API dari MyAnimeList. Website ini dibuat dengan menggunakan React dan Typescript.",
    },
    {
      title: "Arch Store",
      link: "https://arch-store-chi.vercel.app",
      image: "/portfolio/arch.png",
      description:
        "Saya diminta untuk membuat sebuah website store VPS bernama Arch Store.",
    },
  ];

  const certificates = ["/img/ser1.png", "/img/ser3.png", "/img/ser2.png"];

  return (
    <section
      id="portfolio"
      className="bg-light pt-36 pb-16 dark:bg-dark overflow-hidden"
    >
      <div className="container">
        <div className="w-full px-4">
          <div
            className="mx-auto mb-16 max-w-xl text-center"
            data-aos="fade-up"
          >
            <h4 className="mb-2 text-lg font-semibold text-primary dark:text-blue-400">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="mb-12 p-4 md:w-1/2"
              data-aos="fade-up"
            >
              <div className="overflow-hidden rounded-md shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                {project.title}
              </h3>
              <p className="text-base font-medium text-primary dark:text-secondary">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mx-auto mb-16 max-w-xl text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
            Sertifikasi Keahlian
          </h2>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {certificates.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Certificate ${index + 1}`}
              width={400}
              height={250}
              className="mb-12 p-4 md:w-1/3"
              data-aos="fade-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
