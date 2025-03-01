"use client";

import { useState, useEffect, useRef } from "react";
import { SunDim, MoonStars } from "@phosphor-icons/react";
import Link from "next/link";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const headerRef = useRef(null);
  const toTopRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetTop) {
          headerRef.current.classList.add("navbar-fixed");
          toTopRef.current?.classList.remove("hidden");
          toTopRef.current?.classList.add("flex");
        } else {
          headerRef.current.classList.remove("navbar-fixed");
          toTopRef.current?.classList.remove("flex");
          toTopRef.current?.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerRef.current &&
        navMenuRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        !navMenuRef.current.contains(event.target)
      ) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 w-full flex items-center z-10 transition-colors"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="/"
              className="font-bold text-3xl block py-6 px-4 text-primary dark:text-blue-400"
            >
              byntangxyz
            </Link>
          </div>
          <div className="flex items-center px-4 lg:px-1">
            <button
              onClick={toggleDarkMode}
              className="px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-12 lg:mr-0"
            >
              {isDarkMode ? <MoonStars size={32} /> : <SunDim size={32} />}
            </button>
            <button
              ref={hamburgerRef}
              className={`block absolute right-4 lg:hidden ${
                isNavVisible ? "hamburger-active" : ""
              }`}
              onClick={() => setIsNavVisible(!isNavVisible)}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              ref={navMenuRef}
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent text-center ${
                isNavVisible ? "block" : "hidden"
              }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="/"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/portfolio"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/about"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/blog"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li className="group">
                  <a
                    href="https://bxlinks.vercel.app"
                    target="_blank"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-blue-400 dark:text-white"
                  >
                    Links
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
