import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-light px-5 pt-10 pb-6">
      {/* Первый ряд: Лого + Фраза */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 md:hidden">
        <img src="/logo-outline.png" className="w-[100px] h-[55px]" />
        <p className="text-lg font-light italic text-right">
          Let's Build the Future Together
        </p>
      </div>

      {/* Мобильная версия (2 столбца) */}
      <div className="grid grid-cols-2 gap-5 pt-6 md:hidden">
        {/* Tech Stack */}
        <ul>
          <li className="text-slate-500 font-medium pb-2">Tech Stack</li>
          <li className="text-light">React.ts</li>
          <li className="text-light">Node.js</li>
          <li className="text-light">PostgreSQL</li>
          <li className="text-light">Tailwind CSS</li>
        </ul>

        {/* Social */}
        <ul>
          <li className="text-slate-500 font-medium pb-2">Social</li>
          <li className="text-light">
            <a
              href="https://www.linkedin.com/in/vladyslav-svitelskyi-882a322a5/"
              className="link"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-light">
            <a href="https://t.me/akanenai" className="link">
              Telegram
            </a>
          </li>
          <li className="text-light">
            <a
              href="https://www.fiverr.com/v_svitelskyi/buying"
              className="link"
            >
              Fiverr
            </a>
          </li>
        </ul>
      </div>

      {/* Десктопная версия (фулл дизайн) */}
      <div className="hidden md:flex justify-between pt-20 pb-10 mx-5">
        {/* Левая часть (лого) */}
        <img src="/logo-outline.png" className="w-[100px] h-[55px]" />

        {/* Центральные три колонки */}
        <div className="flex justify-end gap-35 w-[70%]">
          {/* Tech Stack */}
          <ul>
            <li className="text-slate-500 font-medium pb-2">Tech Stack</li>
            <li className="text-light">React.ts</li>
            <li className="text-light">Node.js</li>
            <li className="text-light">PostgreSQL</li>
            <li className="text-light">Tailwind CSS</li>
          </ul>

          {/* Company */}
          <ul>
            <li className="text-slate-500 font-medium pb-2">Company</li>
            {["About", "Portfolio", "Reviews", "Contact"].map((section) => (
              <li key={section} className="text-light">
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={1000}
                  className="link"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social */}
          <ul>
            <li className="text-slate-500 font-medium pb-2">Social</li>
            <li className="text-light">
              <a
                href="https://www.linkedin.com/in/vladyslav-svitelskyi-882a322a5/"
                className="link"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-light">
              <a href="https://t.me/akanenai" className="link">
                Telegram
              </a>
            </li>
            <li className="text-light">
              <a
                href="https://www.fiverr.com/v_svitelskyi/buying"
                className="link"
              >
                Fiverr
              </a>
            </li>
          </ul>
        </div>

        {/* Правая часть (фраза) */}
        <p className="w-[40%] text-end text-2xl font-light italic">
          Let's Build the Future Together
        </p>
      </div>
    </footer>
  );
};

export default Footer;
