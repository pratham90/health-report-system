import React from 'react'
import {Nav,Footer} from "."
import Img from "../assets/38638.jpg"


const doctors = [
  {
    id: 1,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img, // Replace with actual image path
    social: ["🔵", "⚫", "🔗"], // Replace with real icons
  },
  {
    id: 2,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 3,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 4,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 5,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 6,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Img,
    social: ["🔵", "⚫", "🔗"],
  },
];


const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      
      <img src={doctor.image} alt={doctor.name} className="w-full h-72 object-cover" />
      <div className="bg-blue-100 text-center p-4">
        <h3 className="text-lg font-bold">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold">{doctor.specialization}</p>
        <div className="flex justify-center space-x-3 mt-2">
          {doctor.social.map((icon, index) => (
            <span key={index} className="text-lg">{icon}</span>
          ))}
        </div>
        <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg">
          View Profile
        </button>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <>
    <Nav/>
    <div className="container mx-auto ">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] object-contain flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="absolute inset-0  bg-amber-50/40"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-black">Our Doctors</h1>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-15 pb-5">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default Doctors;
