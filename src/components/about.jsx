import React from 'react'
import { Nav, Footer } from "../components"
import doc from "../assets/homeimage.png"
import IMg from "../assets/38638.jpg"
const features = [
  "A Passion for Healing",
  "5-Star Care",
  "All our Best",
  "Believe in Us",
  "Always Caring",
  "A Legacy of Excellence",
];

// Organizations Data
const organizations = [
  {
    id: 1,
    name: "Organization 1",
    image: doc, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Organization 2",
    image: doc,
  },
  {
    id: 3,
    name: "Organization 3",
    image: doc,
  },
];
const about = () => {


  // Features Section

  return (
    <div className="bg-gray-100">
      <Nav />
    
       <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${IMg})`, backgroundSize: "cover", backgroundPosition: "center" , opacity:"50"}}  >
      {/* Overlay to darken the background for better readability */}
      <div className="absolute inset-0   bg-amber-50/40"></div>

      {/* Content */}
      <div className="relative text-center px-4 text-black">
        <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to our hospital. We are committed to providing the best healthcare services with 
          compassion, excellence, and innovation.
        </p>
      </div>
    </div>

      {/* Main Section */}
      <div className="container mx-auto px-15 py-12">
        <div className="grid md:grid-cols-2 gap-10 px-20 items-center">
          {/* Right Side (Image) */}
          <div>
            <img
              src={doc} // Replace with actual image URL
              alt="Doctors"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Left Side */}
          <div>
            <h3 className="text-blue-600 uppercase font-semibold">
              Welcome to Hospital Name
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Best Care for Your Good Health
            </h2>
            <ul className="mt-4 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> {feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque felis vitae tortor augue.
            </p>
          </div>

        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-blue-900 text-white py-12 mx-15 text-center">
        <p className="text-lg italic max-w-2xl mx-auto">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque felis vitae tortor augue."
        </p>
        <p className="mt-4 font-semibold">- John Doe</p>
      </div>

      {/* Organizations Section */}
      <div className="container mx-auto px-4 py-12 text-cente px-15">
        <h3 className="text-blue-600 uppercase font-semibold text-center">Trusted Care</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-center">Our Organisations</h2>

        {/* Organization Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {organizations.map((org) => (
            <div key={org.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={org.image}
                alt={org.name}
                className="w-full  h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">{org.name}</h3>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
