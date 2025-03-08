import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenu2, TbX } from "react-icons/tb"; // Бургер-иконки
import logo from "../assets/logo.png";
import GlowButton from "./GlowButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isOpen ? 1 : 0 }} // Сдвигаем контент вниз
      transition={{ duration: 0.4 }}
      className={`top-0 left-0 w-full md:bg-none z-50 shadow-md ${
        isOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        {/* ЛОГОТИП */}
        <img src={logo} className="w-14" />

        {/* БУРГЕР-КНОПКА */}
        <motion.button
          className="md:hidden text-light text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <TbX /> : <TbMenu2 />}
        </motion.button>

        {/* НАВИГАЦИЯ ДЛЯ ДЕСКТОПА */}
        <nav className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-6 text-light">
            {["Home", "About", "Portfolio", "Reviews", "Contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section.toLowerCase().replace(/\s+/g, "-")}
                    smooth={true}
                    duration={1000}
                    className="link"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
          <GlowButton>
            <Link to="contact" smooth={true} duration={1000}>
              Get in Touch
            </Link>
          </GlowButton>
        </nav>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ С АНИМАЦИЕЙ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 w-full py-6 bg-gradient-to-b from-black pb-200"
          >
            <ul className="flex flex-col space-y-6 text-center text-light">
              {["Home", "About", "Portfolio", "Reviews", "Contact"].map(
                (section) => (
                  <motion.li
                    key={section}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="cursor-pointer"
                  >
                    <Link
                      to={section.toLowerCase().replace(/\s+/g, "-")}
                      smooth={true}
                      duration={1000}
                      className="block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {section}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
            <div className="flex justify-center mt-4 collapse md:visible">
              <GlowButton>
                <Link to="contact" smooth={true} duration={1000}>
                  Get in Touch
                </Link>
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
