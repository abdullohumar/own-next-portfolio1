import React from 'react'
import { navLinks } from '../static/navLink'
import Link from 'next/link'
import { HiBars3 } from 'react-icons/hi2'
import { CgClose } from 'react-icons/cg'
import { FaAngellist } from "react-icons/fa";

type Props = {
    openNav: () => void
    isOpen: boolean
}

const Nav = ({ openNav, isOpen }: Props) => {
    return (
        <nav className='w-full h-[9vh] bg-gray-800 z-50 relative'>
            <div className='w-[90%] lg:w-[80%] flex items-center justify-between h-full mx-auto '>
                {/* Logo */}
                <Link href={''}>
                    <div className='flex items-center justify-center relative p-2'>
                        <div className='absolute inset-0 bg-gradient-to-br from-yellow-500 via-black to-yellow-500 animate-spin-slow w-full rounded-full' />
                        <FaAngellist className='w-8 h-8 text-yellow-400 font-extrabold relative animate-spin-slow-reverse'/>
                    </div>
                </Link>
                {/* Links */}
                <div className='hidden md:flex space-x-7 justify-center items-center'>
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url} className='relative group'>
                            <p className='text-white font-semibold text-[15px] font-montserrat after:content-[""] after:absolute after:bg-yellow-500 after:h-[3px] after:w-full after:block after:rounded-full after:scale-x-0 after:hover:scale-x-100 after:transition after:origin-left duration-300'>{link.label}</p>
                        </Link>
                    ))}
                    <Link href={'#'}>
                        <button className='bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-400'>Contact Me</button>
                    </Link>
                </div>
                < div onClick={openNav} className="md:hidden text-white w-8 h-8 cursor-pointer">
                    {isOpen ? <CgClose className="w-8 h-8" /> : <HiBars3 className="w-8 h-8" />}
                </div>
            </div>
        </nav>
    )
}

export default Nav