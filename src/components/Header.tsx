import Button from "./Button";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <img src={logo} className="w-15 m-8" />
      <nav className="flex space-x-8 py-1 self-center">
        <ul className="flex space-x-6 text-light self-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <Button>Get in Touch</Button>
      </nav>
    </header>
  );
};

export default Header;
