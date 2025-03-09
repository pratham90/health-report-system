import React from "react";
import { motion } from "framer-motion";


const CanvasImage = () => {
    return (
        // <div className="flex justify-between items-center w-full">
           
            <div className="relative py-20 flex items-start w-150 gap -20 justify-end px-30 h-screen bg-gray-100">
                 <div className=' bg-red-'>
                <img src="../assets/homeimage.png" alt="" />
                cefjk
            </div>
                {/* Central Doctor Image */}
                <motion.img
                    
                    alt="Doctor"
                    className="absolute right-62 top-50 rounded-[50%] w-55 h-55 z-10"
                    initial={{ scale: 0.7 }}
                    animate={{ scale: 0.9 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Rotating Video Frames */}
                <motion.div
                    className="absolute w-120 h-120"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <motion.img
                        src={doctorImage}
                        alt="Doctor Frame 1"
                        className="absolute top-0 left-1/2 transform rounded-[50%] -translate-x-1/2 w-30 h-30"
                    />
                    <motion.img
                        src={doctorImage}
                        alt="Doctor Frame 2"
                        className="absolute bottom-0 left-1/2 transform rounded-[50%] -translate-x-1/2 w-30 h-30"
                    />
                    <motion.img
                        src={doctorImage}
                        alt="Doctor Frame 3"
                        className="absolute left-0 top-1/2 transform rounded-[50%] -translate-y-1/2 w-30 h-30"
                    />
                    <motion.img
                        src={doctorImage}
                        alt="Doctor Frame 4"
                        className="absolute right-0 top-1/2 transform rounded-[50%] -translate-y-1/2 w-30 h-30"
                    />
                </motion.div>
            </div>
    
    );
};

export default CanvasImage;
