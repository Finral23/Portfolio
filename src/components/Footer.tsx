const Footer = () => {
  return (
    <footer className="text-light flex justify-between pt-20 pb-10">
      <span className="flex justify-between w-[70%]">
        <img
          src="/logo-outline.png"
          className="w-[100px] h-[55px] max-w-2xs mt-2"
        />
        <ul>
          <li className="text-slate-500 font-medium pb-2">Tech Stack We Use</li>
          <li className="text-light">React.ts</li>
          <li className="text-light">Node.js</li>
          <li className="text-light">PostgreSQL</li>
          <li className="text-light">Tailwind CSS</li>
        </ul>
        <ul>
          <li className="text-slate-500 font-medium pb-2"> Company</li>

          <li className="text-light">About</li>
          <li className="text-light">Portfolio</li>
          <li className="text-light">Reviews</li>
          <li className="text-light">Contact</li>
        </ul>
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
      </span>
      <span className="w-[40%] text-end">
        <p className="text-2xl font-light italic">
          Let's Build the Future Together
        </p>
      </span>
    </footer>
  );
};

export default Footer;
