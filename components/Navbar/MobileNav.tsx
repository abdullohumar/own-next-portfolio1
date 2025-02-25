import React from 'react'
import { navLinks } from '../static/navLink'
import Link from 'next/link'

type Props = {
    openNav: () => void
    isOpen: boolean
}

const MobileNav = ({ openNav, isOpen }: Props) => {
    return (
        <div className='md:hidden'>
            <div className={`fixed bg-black/70 w-full h-screen  transition ${isOpen ? 'translate-y-0' : '-translate-y-[200%]'} duration-300 ease-out`} onClick={openNav} />
            <div className={`fixed flex flex-col items-center justify-center w-full h-[50%] bg-transparent z-40 ${isOpen ? 'translate-y-0' : '-translate-y-[200%]'} transition duration-800 ease-out`}>
                {navLinks.map((link) => (
                    <Link key={link.id} href={link.url} className="block w-full" onClick={openNav}>
                        <p className="text-white font-semibold text-[15px] font-montserrat hover:bg-white hover:text-black w-full p-6 text-center transition duration-300 cursor-pointer">
                            {link.label}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default MobileNav