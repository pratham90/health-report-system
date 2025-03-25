import React from 'react'
import {Nav,Footer} from "."
import Img from "../assets/docbg.jpg"
import Doc1 from "../assets/pexels-usman-yousaf-708951-6762866.jpg"
import Doc2 from "../assets/pexels-carmel-nsenga-735492-18788957.jpg"
import Doc3 from "../assets/pexels-sagar-tiwari-988598841-27298085.jpg"
import Doc4 from "../assets/pexels-tima-miroshnichenko-6010796.jpg"
import Doc5 from "../assets/pexels-usman-yousaf-708951-6762866.jpg"


const doctors = [
  {
    id: 1,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc1, // Replace with actual image path
    social: ["🔵", "⚫", "🔗"], // Replace with real icons
  },
  {
    id: 2,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc2,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 3,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc3,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 4,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc4,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 5,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc5,
    social: ["🔵", "⚫", "🔗"],
  },
  {
    id: 6,
    name: "Doctor's Name",
    specialization: "NEUROLOGY",
    image: Doc5,
    social: ["🔵", "⚫", "🔗"],
  },
];


const DoctorCard = ({ doctor }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-[#E5F5E0]  ">
      
      <img src={doctor.image} alt={doctor.name} className="w-full h-72 object-cover" />
      <div className="bg-[#d0efc7] text-center p-4">
        <h3 className="text-lg font-bold">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold">{doctor.specialization}</p>
        <div className="flex justify-center space-x-3 mt-2">
          {doctor.social.map((icon, index) => (
            <span key={index} className="text-lg">{icon}</span>
          ))}
        </div>
        <button className="mt-4 hover:bg-[#8eca7c] bg-[#b4e1a7] cursor-pointer text-black px-4 py-2 rounded-lg">
          View Profile
        </button>
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <div className='bg-[#E5F5E0]'>
    <Nav/>
    <div className="container mx-auto bg-[#E5F5E0] ">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[550px] object-contain flex items-center justify-center mx-10 mt-5 border-none rounded-xl text-white"
        style={{ backgroundImage: `url(${Img})` }}
      >
        {/* <div className="absolute inset-0  bg-amber-50/40"></div> */}
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
      </div>
  );
};

export default Doctors;
