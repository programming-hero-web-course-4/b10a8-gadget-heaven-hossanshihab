
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
    <nav className="navbar bg-purple-600 p-4">
      <div className="flex justify-between items-center w-full">
        <div className="text-3xl font-bold text-white">
          Gadget Heaven
        </div>
        <ul className="hidden lg:flex space-x-8">
          {navLinks}
        </ul>
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-300">Cart</button>
          <button className="text-white hover:text-gray-300">WishList</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
