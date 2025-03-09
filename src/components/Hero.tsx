import { Link } from "react-scroll";
import ButtonOutline from "./ButtonOutline";

const Hero = () => {
  return (
    <div className=" text-white px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          Your{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">
            vision
          </span>
          , our{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
            code
          </span>{" "}
          – websites that make an{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-200 bg-clip-text text-transparent">
            impact.{" "}
          </span>
        </h1>
        <p className="text-gray-200 mt-6 max-w-2xl">
          We are a team of passionate developers and designers specializing in
          creating custom websites from scratch. From stunning UI/UX design to
          powerful full-stack development, we bring your ideas to life with
          modern React & Node.js technologies.
        </p>
        <ul className="text-gray-200 mt-4 space-y-2">
          <li className="flex items-center before:content-['🔹'] before:text-blue-500 before:mr-2">
            Unique, high-performance websites
          </li>
          <li className="flex items-center before:content-['🔹'] before:text-blue-500 before:mr-2">
            Fully responsive & SEO-friendly
          </li>
          <li className="flex items-center before:content-['🔹'] before:text-blue-500 before:mr-2">
            Tailored to your business needs
          </li>
        </ul>
        <ButtonOutline>
          <Link to="portfolio" smooth={true} duration={1000}>
            View Works →
          </Link>
        </ButtonOutline>
      </div>
    </div>
  );
};

export default Hero;
