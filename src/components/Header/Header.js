import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="text-white body-font bg-blue-500 w-full fixed z-50">
      <div className="container md:w-5/6 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="ml-3 text-2xl font-bold text-white" to="/">
          AMAZINGPARK
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold ">
          <Link className="mr-5 hover:text-gray-900" to="/home">
            Home
          </Link>
          <NavHashLink className="mr-5 hover:text-gray-900" to="/home#rides">
            Our Ride
          </NavHashLink>
          <NavHashLink className="mr-5 hover:text-gray-900" to="/home#feedback">
            Feedback
          </NavHashLink>
          <Link className="mr-5 hover:text-gray-900" link="/contact">
            Contact Us
          </Link>
        </nav>
        <Link
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          to="/login"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
