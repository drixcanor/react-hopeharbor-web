import React, { useState, useEffect, useRef } from "react";
import { FaTelegram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu visibility
  const menuRef = useRef(null); // Ref for the menu content

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to close menu when clicking outside of it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`mb-5 flex items-center justify-between py-6 ${isSticky ? 'fixed top-0 left-0 w-full z-50 bg-opacity-75 transition-all duration-300' : 'relative'}`}>
      {!isSticky && ( // Conditionally render HOPEHARBORQBC if not sticky
        <section className="flex flex-shrink-0 items-center px-4 py-2">
          <span className="mx-2 text-2xl">HOPEHARBORQBC</span>
        </section>
      )}
      <aside className={`m-10 flex items-center justify-end gap-4 text-3xl ${isSticky ? 'absolute right-0 top-0 mt-6' : ''}`}>
        <button onClick={() => handleRedirect("https://t.me/HopeHarborQBC")}>
          <FaTelegram /> 
        </button>
        <button onClick={toggleMenu} className="text-3xl">
          <GiHamburgerMenu /> {/* Hamburger menu icon */}
        </button>
      </aside>
      {menuOpen && (
        <motion.div
          ref={menuRef} // Assign the ref to the menu content
          className="absolute right-0 top-20 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        >
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#home">Home</a></li>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#about">About Us</a></li>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#technologies">Legality</a></li>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#experience">Experience</a></li>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#projects">Projects</a></li>
            <li className="px-4 py-2 hover:bg-gray-700"><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
