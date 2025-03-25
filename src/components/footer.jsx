import React from "react";

const footer = () => {
  return (
    <footer className=" bg-[#a8ee92] text-gray-950 py-10 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl  text-black font-bold">MEDIN</h2>
          <p className="mt-2 text-sm">Leading the Way in Medical Excellence, Trusted Care.</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Appointment</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Call: (+254) 717 788 146</li>
            <li>Email: medin@mail.com</li>
            <li>Address: 012 Some Place, Some Country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <div className="flex items-center bg-white p-1 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full p-2 text-gray-800 outline-none"
            />
            <button className=" bg-[#85cf71] cursor-pointer text-white px-3 py-2 rounded-md">➤</button>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 MEDIN. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
