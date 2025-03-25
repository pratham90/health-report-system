import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Doc from "../assets/pexels-usman-yousaf-708951-6762866.jpg"
import News from "../assets/news.jpg"
import Contact from "../assets/contact.jpg"
import About from "../assets/about us.jpg"
import Appointment from "../assets/BookApp.jpg"
import Report from "../assets/report.png"
const services = [
  {
    id: 1,
    title: "DOCTORS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: Doc,
    route: "/Doctors", // ✅ Route for this service
  },
  {
    id: 2,
    title: "NEWS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: News,
    route: "/news", 
  },
  {
    id: 3,
    title: "CONTACT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: Contact,
    route: "/contact",
  },
  {
    id: 4,
    title: "ABOUT US",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: About,
    route: "/about", 
  },
  {
    id: 5,
    title: "BOOK APPOINTMENT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: Appointment,
    route: "/appointment", // ✅ Route for this service
  },
  {
    id: 6,
    title: "DASHBOARD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore odit minus totam.",
    image: Report,
    route: "/appointment", // ✅ Route for this service
  },
];

const ServicesScroller = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  // Scroll on touchpad/mousewheel
  const handleWheelScroll = (event) => {
    event.preventDefault();
    containerRef.current.scrollLeft += event.deltaY * 2; // Adjust speed
  };

  return (
    <div className="bg-[#E5F5E0] py-13 px-10" >
      <h2 className="text-center text-4xl font-bold text-black mb-8">OUR SERVICES</h2>
      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheelScroll}
      >
        <motion.div
          className="flex space-x-6"
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="min-w-[350px] bg-[#E5F5E0] rounded-lg shadow-lg p-5 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(service.route)} // ✅ Navigate on click
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-md w-full h-[200px] object-cover"
              />
              <h3 className="text-xl font-bold mt-3 flex items-center">
                {service.title}
                <span className="ml-2 bg-[#E5F5E0] text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              </h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesScroller;
