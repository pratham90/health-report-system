import React from "react";
import DeksImg from "../assets/homebg.png";
import MobImg from "../assets/mobmainImg.jpg";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Service from "./ServicesScroller"
import { motion } from "framer-motion";
import Img4 from "../assets/img4.avif"
import {Link} from "react-router-dom";
import Img1 from "../assets/img1.avif"
import Img2 from "../assets/img2.avif"
import Img3 from "../assets/img3.avif"

const section = () => {
    useGSAP(()=>{
        gsap.from(".img",{
            x:-1000,
            duration:1,
            opacity:0,
            
        }
        )
        gsap.from(".leftbox",{
            rotate:60,
            scale:80,
            duration:0.8,
            // repeat:-1,
            
        }
        )
    })
    return (
      <div className="bg-[#E5F5E0]">
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 lg:px-16 bg-gradient-to-l my-2 from-[#c0e1b6] to-[#93d67e] overflow-hidden">
        {/* Main Content */}
        <div className="max-w-4xl">
          <h3 className="text-lg text-gray-700 uppercase tracking-widest">
            HEALTH DIAGNOSIS
          </h3>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mt-2">
            HEALTH CHECKUP & DIAGNOSIS <br />
            <span className="relative">
              AT YOUR FINGERTIPS
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-1 bg-green-500"
              />
            </span>
          </h1>
          <Link to="/services"><button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300">
            Explore services
          </button></Link>
        </div>
  
        {/* Floating Frames (Hidden on Mobile) */}
        <div className="hidden lg:block">
          {/* Floating Image Frames */}
          <motion.img
            src={Img1}
            alt="Frame 1"
            className="absolute top-10 left-20 w-55 rounded-lg shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          />
          <motion.img
            src={Img2}
            alt="Frame 2"
            className="absolute top-20 right-40 w-72 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          />
          <motion.img
            src={Img3}
            alt="Frame 3"
            className="absolute bottom-20 left-40 w-36 rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
          />
          <motion.img
            src={Img4}
            alt="Frame 4"
            className="absolute bottom-20 right-40 w-50 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: -20, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
          />
        </div>
      </section>
      <Service/>
      <div className=" border-1 h-100 p-10 m-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi perspiciatis suscipit voluptates nisi quae veritatis accusamus alias. Expedita autem necessitatibus voluptatibus reprehenderit deserunt laboriosam voluptatem, culpa sequi explicabo! Blanditiis veritatis, modi esse quos doloribus aut quis placeat suscipit assumenda magnam quia, ipsa asperiores dolorum commodi!
      </div>
      </div>
    );
};

export default section;
