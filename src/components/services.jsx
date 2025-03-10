import React from "react";
import {Nav, Footer} from "../components"
import IMg from "../assets/38638.jpg"
const Services = [
  {
    id: 1,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: IMg, // Replace with actual image paths
    icon: "🔗", // You can replace this with an actual icon
  },
  {
    id: 2,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: IMg,
    icon: "🔗",
  },
  {
    id: 3,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: IMg,
    icon: "🔗",
  },
  {
    id: 4,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image:IMg,
    icon: "🔗",
  },
  {
    id: 5,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: IMg,
    icon: "🔗",
  },
  {
    id: 6,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image:IMg,
    icon: "🔗",
  },
];

const services = () => {
  return (
    <>
      <Nav/>
    <div className="container mx-auto  ">
      {/* Hero Section */}
            <div
           className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
           style={{ backgroundImage: `url(${IMg})`, backgroundSize: "cover", backgroundPosition: "center" , opacity:"50"}}  >
           {/* Overlay to darken the background for better readability */}
           <div className="absolute inset-0   bg-amber-50/40"></div>
        <div className="absolute inset-0  bg-opacity-40"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-black">Our Services</h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-15">
        {Services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-30 left-50 w-full h-full  bg-opacity-20 flex items-center justify-center text-white text-3xl">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <a
                href="#"
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default services;

