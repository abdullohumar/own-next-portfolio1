'use client'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpen = () => setIsOpen(!isOpen)
  return (
    <div>
        <Nav openNav={handleOpen} isOpen={isOpen}/>
        <MobileNav openNav={handleOpen} isOpen={isOpen}/>
    </div>
  )
}

export default ResponsiveNav