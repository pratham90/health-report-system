import React from 'react'
import {Nav,Footer} from "../components"
import Img from "../assets/38638.jpg"
import GoogleMapComponent from "./GoogleMapComponent";
import { ContactCard } from './CompoFunc';


const contactDetails = [
  {
    id: 1,
    title: "EMERGENCY",
    icon: "📞",
    details: ["(237) 681-812-255", "(237) 666-331-894"],
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "LOCATION",
    icon: "📍",
    details: ["0123 Some place", "9876 Some country"],
    bgColor: "bg-blue-900 text-white",
  },
  {
    id: 3,
    title: "EMAIL",
    icon: "📧",
    details: ["flidineesoso@gmail.com", "mybestudios@gmail.com"],
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "WORKING HOURS",
    icon: "⏰",
    details: ["Mon-Sat: 09:00-20:00", "Sunday Emergency only"],
    bgColor: "bg-blue-100",
  },
];

// Contact Card Component

const contact = () => {
  return (
    <div>
      <Nav/>
      <div className="container mx-auto ">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="absolute inset-0 bg-amber-50/40"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-center text-black">
          Our Contacts
        </h1>
      </div>

      {/* Google Map */}
      <div className="mt-5 flex justify-center items-center xl:w-380 px-15">
  <GoogleMapComponent />
</div>

      {/* Contact Form & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-15 py-10">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-blue-900 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-blue-900 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 gap-4">
          {contactDetails.map((info) => (
            <ContactCard key={info.id} info={info} />
          ))}
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default contact
