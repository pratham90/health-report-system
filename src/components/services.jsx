import React from "react";
import { Nav, Footer } from "../components";
import Doc from "../assets/pexels-usman-yousaf-708951-6762866.jpg";
import News from "../assets/news.jpg";
import Contact from "../assets/contact.jpg";
import About from "../assets/about us.jpg";
import Appointment from "../assets/BookApp.jpg";
import Report from "../assets/report.png";
import Service from "../assets/www.jpg";
const Services = [
  {
    id: 1,
    ttitle: "DOCTORS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: Doc, // Replace with actual image paths
    icon: "🔗", // You can replace this with an actual icon
  },
  {
    id: 2,
    ttitle: "NEWS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: News,
    icon: "🔗",
  },
  {
    id: 3,
    itle: "CONTACT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: Contact,
    icon: "🔗",
  },
  {
    id: 4,
    title: "ABOUT US",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: About,
    icon: "🔗",
  },
  {
    id: 5,
    title: "BOOK APPOINTMENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: Appointment,
    icon: "🔗",
  },
  {
    id: 6,
    title: "DASHBOARD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat convallis felis vitae tortor.",
    image: Report,
    icon: "🔗",
  },
];

const services = () => {
  return (
    <div className="bg-[#E5F5E0]">
      <Nav />
      <div className="container mx-auto   ">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[500px]  m-auto flex items-center justify-center mx-10 mt-5 border-none rounded-xl text-white"
          style={{
            backgroundImage: `url(${Service})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "100",
          }}
           >
          <div className="absolute inset-0   bg-amber-50/40"></div>
          <div className="absolute inset-0  bg-opacity-40"></div>
          <h1 className="relative text-4xl md:text-6xl font-bold text-black">
            OUR SERVICES
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11 px-15">
          {Services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden my-10"
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
      <Footer />
    </div>
  );
};

export default services;
