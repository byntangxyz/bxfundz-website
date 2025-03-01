"use client"; // Jika pakai Next.js 13+ App Router

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init(); // Inisialisasi AOS

    // Inisialisasi Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "A.I Engineering",
        "Student",
        "Tech Enthusiast",
        "Photographer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
    });

    return () => typed.destroy(); // Hapus efek saat komponen unmount
  }, []);

  return (
    <section
      id="home"
      className="mt-6 pb-8 dark:text-white transition-colors min-h-screen overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Bagian Kiri */}
          <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-up">
            <h1 className="text-base font-semibold md:text-lg lg:text-xl">
              Hello World! I'm
              <span className="text-primary text-4xl block lg:text-6xl dark:text-blue-400">
                byntang<span className="rgb">xyz</span>
              </span>
            </h1>
            <span
              ref={typedRef}
              className="rgb text-3xl font-bold lg:text-5xl"
            ></span>
            <p className="font-medium text-slate-500 mb-10 md:text-lg lg:text-xl">
              I'm just an ordinary human, nothing special{" "}
              <Link href="/about" className="text-blue-400">
                about me
              </Link>
              !
            </p>
            <Link
              href="/portfolio"
              className="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out"
            >
              View My Stats
            </Link>
          </div>

          {/* Bagian Kanan */}
          <div className="w-full self-end px-4 lg:w-1/2" data-aos="fade-up">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <div className="p-4 mx-auto">
                <div className="flex flex-wrap">
                  <Image
                    src="/img/pfp1.png"
                    alt="photo-profile"
                    width={400}
                    height={400}
                    priority={false}
                    className="max-w-full mx-auto rounded-lg relative bg-white dark:bg-slate-200 shadow-2xl p-2 pb-6 aspect-square object-cover"
                  />
                </div>
                <p className="text-center text-slate-500">-Bintang Maulana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
