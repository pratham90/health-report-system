import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import logo from "../assets/Logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAuth } from "./AuthContext"; // Import AuthContext

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".nav-items", {
      y: -50,
      duration: 1,
      delay: 1.5,
    });
  });
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth(); // Get login state
  return (
    <>
      <div className="nav  bg-[#E5F5E0]  h-12 justify-between xl:justify-around  lg:px-10 md:h-15 px-5 md:px-5 py-5 items-center text-black flex overflow-hidden">
        <div className="md:hidden flex  items-center">
          <FontAwesomeIcon
            className="text-black h-6 w-6 cursor-pointer"
            icon={open ? faTimes : faBars} // Toggle between faBars & faTimes
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="nav-items  log h-10 w-10 bg-blue-500 rounded-[50%] border-transparent">
          <img
            className=" overflow-auto border-transparent rounded-4xl"
            src={logo}
            alt=""
          />
        </div>

        <div className="hidden md:flex justify-center items-center lg:gap-15 gap-5 text-xl md:text-xl">
          <Link to="/home" className="nav-items acitve:bg-red-400">
            Home
          </Link>
          <Link to="/about" className="nav-items acitve:bg-red-400">
            About Us
          </Link>
          <Link to="/services" className="nav-items acitve:bg-red-400">
            Services
          </Link>
          <Link to="/Doctors" className="nav-items acitve:bg-red-400">
            Doctors
          </Link>

          <Link to="/news" className="nav-items acitve:bg-red-400">
            News
          </Link>
          <Link to="/contact" className="nav-items acitve:bg-red-400">
            Contact
          </Link>
        </div>
        <div className="flex gap-3 nav-items">
          {isLoggedIn ? (
            <Link
              to="/appointment"
              className="btn bg-gradient-to-r from-[#9beb9c] to-[#51ec99] rounded-3xl px-4 py-2 text-black "
            >
              Appointment
            </Link>
          ) : (
            <Link
              to="/signup"
              className="btn bg-gradient-to-r from-[#9beb9c] to-[#51ec99] px-4 py-2 rounded-3xl  text-blackfont-bold"
            >
              Sign-up
            </Link>
          )}
        </div>
        <motion.div
          className={`md:hidden flex flex-col bg-[#afed9c]/90 text-black text-center absolute top-14 left-1/2 transform -translate-x-1/2 w-full max-w-[250px] sm:max-w-[600px] px-4 py-6 rounded-xl shadow-lg z-50 ${
            open ? "block" : "hidden"
          }`}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: open ? "0%" : "-100%", opacity: open ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {[
            { name: "Home", path: "/home" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Doctors", path: "/Doctors" },
            { name: "News", path: "/news" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              className="py-3 text-lg font-semibold transition-colors duration-200 hover:text-white hover:bg-[#8cd574] rounded-lg"
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
