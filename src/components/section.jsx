import React from 'react'
import DeksImg from "../assets/deksmainImg.png"
import MobImg from "../assets/mobmainImg.jpg"
const section = () => {
    return (
        <>
        <div className='flex   flex-col  pt-4'>
            <div className='flex w-full '>
            <div className='hidden sm:flex md:h-80 md:w-120 sm:h-70 sm:w-100 lg:h-120 lg:w-230  '>
                <img src={DeksImg} alt="" />
                <div className='border-1 w-30'>
                  veri
                </div>
            </div>
            </div>
            <div className='relative sm:hidden  object-cover bg-red-300 border-1 opacity-70 z-10'>
                <img className=" object-fill" src={MobImg} alt="" />
              
            </div>

            <div className=' border-1 h-50 md:h-70 sm:h-60 lg:h-70'>
                jo likhna h likho
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda optio veniam, placeat soluta culpa repellat aliquam, aperiam odio, possimus natus in debitis sit error a. Qui expedita corporis eum recusandae.
                Explicabo, dolor sint quam unde atqueat voluptates impedit debitis iusto, voluptatum tenetur nobis culpa enim natus quas odit minima sequi quod dolor! Nesciunt!

            </div>
            </div>
        </>
    )
}

export default section;
