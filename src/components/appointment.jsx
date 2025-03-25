import React from 'react'
import { Nav, Footer } from "../components"
import Img from "../assets/appointmentbg.jpg"
import { formFields, scheduleHours } from "./CompoFunc"



const appointment = () => {
    return (
        <div className='bg-[#E5F5E0]'>
            <Nav />
            <div className="min-h-screen bg-[#E5F5E0]  ">
                {/* Header Section */}
                <div
                    className="relative bg-cover bg-center h-[550px] flex items-center justify-center mx-10 mt-5 border-none rounded-xl text-white"
                    style={{ backgroundImage: `url(${Img})` }}
                >
                <div className="absolute inset-0 bg-amber-50/20"></div>
                <div className='flex flex-col justify-center items-center text-black z-20'>
                    <h2 className="text-3xl font-extrabold">Book an Appointment</h2>
                    <p className="mt-2 text-black  ">
                        Schedule a consultation with our expert doctors.
                    </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto mt-10 grid gap-8 md:grid-cols-2 md:px-15 md:pb-8 p-2">
                    {/* Booking Form */}
                    <div className="bg-[#40842d]  text-black md:p-6 rounded-lg shadow-lg ">
                        <h3 className="text-xl font-semibold mb-4 pl-3 pt-2">Book an Appointment</h3>
                        <form className="grid gap-4">
                            {formFields.map((field, index) => (
                                <div key={index}>
                                    {field.type === "select" ? (
                                        <select
                                            className="w-full p-3 border border-gray-300 rounded-lg text-black"
                                            name={field.name}
                                        >
                                            {field.options.map((option, i) => (
                                                <option key={i} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : field.type === "textarea" ? (
                                        <textarea
                                            className="w-full p-3 border border-gray-300 rounded-lg text-black"
                                            name={field.name}
                                            placeholder={field.placeholder}
                                        />
                                    ) : (
                                        <input
                                            className="w-full p-3 border border-gray-300 rounded-lg text-black"
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full bg-white text-green-900 font-bold py-3 rounded-lg mt-4  hover:bg-green-200"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Schedule Hours */}
                    <div className="bg-[#40842d] text-black p-6 rounded-lg h-120 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Schedule Hours</h3>
                        <ul>
                            {scheduleHours.map((item, index) => (
                                <li key={index} className="flex justify-between py-2 border-b border-gray-300">
                                    <span>{item.day}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 text-center">
                            <p className="font-bold text-lg">Emergency</p>
                            <p className="text-gray-900">(237) 681-812-255</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default appointment
