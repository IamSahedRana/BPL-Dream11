import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-red-100">
      <div className="max-w-7xl mx-auto px-4 h-18 flex justify-between items-center">
        
        <img
          src={Logo}
          alt="Cricket logo"
          className="h-16 w-auto object-contain"
        />

        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;