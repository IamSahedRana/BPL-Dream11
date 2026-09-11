import Logo from "../assets/logo.png";
import { BsCoin } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

interface NavProps {
  coins: number;
}

const Nav = ({ coins }: NavProps) => {
  return (
    <nav className="w-full bg-base-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <img
            src={Logo}
            alt="Cricket logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <ul className="hidden md:flex gap-8 items-center text-gray-500 font-medium">
            <li className="cursor-pointer hover:text-gray-900 transition-colors">Home</li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">Fixture</li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">Teams</li>
            <li className="cursor-pointer hover:text-gray-900 transition-colors">Schedules</li>
          </ul>

          {/* Dynamic Coin Button */}
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-xl font-bold text-gray-800 bg-white shadow-sm">
            <span>{coins.toLocaleString()} Coin</span>
            <BsCoin className="text-yellow-500 text-xl" />
          </button>

          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1">
              <FiMenu className="text-3xl text-gray-700" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-1 p-3 shadow-lg bg-base-100 rounded-box w-52 mt-4 text-gray-600 font-semibold"
            >
              <li><a>Home</a></li>
              <li><a>Fixture</a></li>
              <li><a>Teams</a></li>
              <li><a>Schedules</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;