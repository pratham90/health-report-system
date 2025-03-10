import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import logo from "../assets/Logo.png"

const Navbar = () => {
    const [open,setOpen] =useState(false);
    return (
        <>
        <div className='bg-[#1F2B6C] h-12 justify-between xl:justify-around  lg:px-10 md:h-15 px-5 md:px-5 py-5 items-center text-amber-50 flex '>
            <div className='md:hidden flex  items-center'>
            <FontAwesomeIcon 
                        className='text-amber-50 h-6 w-6 cursor-pointer' 
                        icon={open ? faTimes : faBars} // Toggle between faBars & faTimes
                        onClick={() => setOpen(!open)} 
                    />
            </div>
            <div className="log h-10 w-10 bg-blue-500 rounded-[50%] border-transparent">
                <img className='border-transparent rounded-4xl' src={logo} alt="" />
            </div>

            <div className='hidden md:flex justify-center items-center lg:gap-15 gap-5 text-xl md:text-xl'>
                <Link to="/home" >Home</Link>
                <Link to="/about" >About Us</Link>
                <Link to="/services" >Services</Link>
                <Link to="/Doctors" >Doctors</Link>

                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='bg-blue-300 border-transparent rounded-3xl px-4 py-1 md:py-1 text-sm text-black sm:text-sm md:text-lg'>
              <Link to="/appointment"> <button>Appointment</button></Link>
            </div>

        </div>
        <motion.div
                className={`md:hidden flex flex-col bg-blue-400/90 text-white text-center absolute top-12 left-0 w-full py-5 z-50 ${open ? 'block' : 'hidden'}`}
                initial={{ x: '100%' }}
                animate={{ x: open ? '0%' : '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <Link className="py-2 " to="/home" onClick={() => setOpen(false)}>Home</Link>
                <Link className="py-2" to="/about" onClick={() => setOpen(false)}>About Us</Link>
                <Link className="py-2" to="/services" onClick={() => setOpen(false)}>Services</Link>
                <Link className="py-2" to="/Doctors" onClick={() => setOpen(false)}>Doctors</Link>
                <Link className="py-2" to="/news" onClick={() => setOpen(false)}>News</Link>
                <Link className="py-2" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </motion.div>
        
        </>
    )
}

export default Navbar
