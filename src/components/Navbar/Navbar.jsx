
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-white">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink to="/statistics" className="hover:underline">
          Statistics
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink to="/dashboard" className="hover:underline">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-purple-800 p-4">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <NavLink to="/">
        <div className="text-3xl cursor-pointer font-bold text-white">
          Gadget Heaven
        </div>
        </NavLink>
        <ul className="hidden lg:flex space-x-8">
          {navLinks}
        </ul>
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-300">
          <FaShoppingCart size={30} color="yellow" />
          </button>
          <button className="text-white hover:text-gray-300">
          <FaHeart size={30} color="red" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
