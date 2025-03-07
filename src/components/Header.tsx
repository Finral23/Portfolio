import logo from "../assets/logo.png";
import GlowButton from "./GlowButton";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 w-full">
      <img src={logo} className="w-15 m-8" />
      <nav className="flex space-x-8 py-1 self-center">
        <ul className="flex-none md:flex space-x-6 text-light self-center">
          <li>
            <a className="link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="link" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <GlowButton>Get in Touch</GlowButton>
      </nav>
    </header>
  );
};

export default Header;
