import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold"><Link to ="/">MyWebsite</Link></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-400 cursor-pointer"><Link to ="/"> Home</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"><Link to ="/about">About</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"><Link to ="/services">Services</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"><Link to ="/contact">Contact</Link></li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-4 rounded">
          <li className="hover:text-gray-400 cursor-pointer"> <Link to ="/"> Home</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"> <Link to ="/about">About</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"> <Link to ="/services">Services</Link></li>
          <li className="hover:text-gray-400 cursor-pointer"> <Link to ="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
