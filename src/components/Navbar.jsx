import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && isVisible) {
        setIsVisible(false); // Scrolling down, hide the navbar
      } else if (prevScrollY.current > currentScrollY && !isVisible) {
        setIsVisible(true); // Scrolling up, show the navbar
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const clickSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full h-[5.5rem] bg-white flex items-center justify-between lgl:px-24 mdl:px-16 sml:px-8 sm:px-5 shadow-bottom z-40 transition-transform duration-300
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center gap-3">
        <span className="border w-12 h-12 bg-primary-300 rounded-full"></span>
        <p className="uppercase font-bold text-[0.95rem] text-secondary-500 mdl:text-sm sml:text-xs">
          Priya Pal
        </p>
      </div>

      {/* Hamburger Menu for Smaller Screens */}
      <button
        className="sml:hidden flex items-center text-primary-300 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sml:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 z-30`}
      >
        <li>
          <a
            href="#home"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200"
            onClick={(e) => {
              clickSmoothScroll(e);
              setIsMenuOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200"
            onClick={(e) => {
              clickSmoothScroll(e);
              setIsMenuOpen(false);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#papers"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200"
            onClick={(e) => {
              clickSmoothScroll(e);
              setIsMenuOpen(false);
            }}
          >
            Papers
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200"
            onClick={(e) => {
              clickSmoothScroll(e);
              setIsMenuOpen(false);
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200"
            onClick={(e) => {
              clickSmoothScroll(e);
              setIsMenuOpen(false);
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Normal Menu for Larger Screens */}
      <ul className="hidden sml:flex gap-10 justify-between">
        <li>
          <a
            href="#home"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200 mdl:text-sm sml:text-xs"
            onClick={clickSmoothScroll}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200 mdl:text-sm sml:text-xs"
            onClick={clickSmoothScroll}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#papers"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200 mdl:text-sm sml:text-xs"
            onClick={clickSmoothScroll}
          >
            Papers
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200 mdl:text-sm sml:text-xs"
            onClick={clickSmoothScroll}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="uppercase font-bold text-[0.95rem] text-secondary-500 hover:text-primary-300 duration-200 mdl:text-sm sml:text-xs"
            onClick={clickSmoothScroll}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
