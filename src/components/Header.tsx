import logo from "../assets/logo.png";
import GlowButton from "./GlowButton";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 w-full">
      <img src={logo} className="w-15 m-8" />
      <nav className="flex space-x-8 py-1 self-center">
        <ul className="flex-none md:flex space-x-6 text-light self-center">
          <li>
            <Link to="home" smooth={true} duration={1000} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000} className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={1000} className="link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="reviews" smooth={true} duration={1000} className="link">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000} className="link">
              Contact
            </Link>
          </li>
        </ul>
        <GlowButton>
          <Link to="contact" smooth={true} duration={1000}>
            Get in Touch
          </Link>
        </GlowButton>
      </nav>
    </header>
  );
};

export default Header;
