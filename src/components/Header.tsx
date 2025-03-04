const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <div className="text-2xl font-bold">My Portfolio</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
