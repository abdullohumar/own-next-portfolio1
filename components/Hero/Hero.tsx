import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-yellow-500 overflow-hidden">
            <div className='w-[90%] lg:w-[80%] flex items-center justify-between h-full mx-auto'>
                <div className=" text-white flex flex-col justify-center p-6 md:p-12 h-full">
                    <p className="text-[40px] font-semibold">Hi, I&apos;m</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-extrabold leading-tight text-black">
                        Abdulloh Umar
                    </h1>
                    <h2 className="text-lg md:text-[25px] text-black font-extrabold sm:text-2xl md:text-3xl mt-2">
                        Web & Flutter Developer
                    </h2>
                </div>
            <div className='hidden lg:flex items-center justify-center overflow-hidden'>
                <Image src={'/me.jpg'} alt='me' height={500} width={500}/>
            </div>
            </div>
        </div>


    )
}

export default Hero