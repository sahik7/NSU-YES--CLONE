import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isGoverningOpen, setGoverningOpen] = useState(false);
  const [isFacultyOpen, setFacultyOpen] = useState(false);
  const [isEventsOpen, setEventsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <img className='absolute top-0 w-full' src="https://i.ibb.co.com/642Nx4B/Untitled-1.jpg" alt="" />
    <div>
    <div className='hidden md:grid md:grid-cols-8 font-poppins text-[17px] py-14 mt-10 font-semibold'>
      <nav className='flex col-span-3 gap-14 justify-center items-center mt-4'>
        <NavLink className="item-effect" to="/#">ACTIVITIES</NavLink>

        <div
          className="nav-item relative"
          onMouseEnter={() => setEventsOpen(true)}
          onMouseLeave={() => setEventsOpen(false)}
        >
          <span className="cursor-pointer item-effect">EVENTS</span>
          {isEventsOpen && (
            <div className="dropdown-menu duration-100">
              <NavLink to="/venturative">Venturative</NavLink>
              <NavLink to="/entrepret">Entrepret</NavLink>
              <NavLink to="/admaker-bangladesh-2019">Admaker Bangladesh 2019</NavLink>
              <NavLink to="/masters-of-ideation">Masters of Ideation</NavLink>
              <NavLink to="/nsuers-meet-corporate-icons">NSUers Meet Corporate Icons</NavLink>
            </div>
          )}
        </div>

        <div
          className="nav-item relative"
          onMouseEnter={() => setGoverningOpen(true)}
          onMouseLeave={() => setGoverningOpen(false)}
        >
          <span className="cursor-pointer item-effect">GOVERNING PANEL</span>
          {isGoverningOpen && (
            <div className="dropdown-menu">
              <NavLink className={"item-effect"} to="/executive-board">Executive Board</NavLink>
              <NavLink className={"item-effect"} to="/sub-executive-board">Sub Executive Board</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Logo */}
      <div className='col-span-2 w-7/12 mx-auto hover:scale-75 duration-700 relative'>
        <Link to="#" ><img className='-top-24 absolute' src="https://i.ibb.co/vszJ5w8/NSU-YES-New-logo-in-png-ezgif-com-webp-to-png-converter.png" alt="" /></Link>
      </div>

      <nav className=' col-span-3 gap-4 grid md:grid-cols-3 mt-4'>
        <div
          className="nav-item relative"
          onMouseEnter={() => setFacultyOpen(true)}
          onMouseLeave={() => setFacultyOpen(false)}
        >
          <span className="cursor-pointer item-effect">FACULTY ADVISORS</span>
          {isFacultyOpen && (
            <div className="dropdown-menu">
              <NavLink to="/mirza-m-ferdous">Mirza M. Ferdous</NavLink>
              <NavLink to="/previous-advisors">Previous Advisors</NavLink>
            </div>
          )}
        </div>
        <NavLink className={"item-effect"} to="/publications">PUBLICATIONS</NavLink>
        <NavLink className={"item-effect"} to="/hall-of-fame ">HALL OF FAME</NavLink>
      </nav>
    </div>
    </div>

{/* MOBILE RESPONSIVE */}

<div className="md:hidden flex items-center justify-between px-4 py-4 bg-gray-800 text-white">
      {/* Left: Logo */}
      <Link to="/" className="text-xl font-bold">
        <img src="https://i.ibb.co/vszJ5w8/NSU-YES-New-logo-in-png-ezgif-com-webp-to-png-converter.png" alt="Logo" className="w-8 h-8" />
      </Link>

      {/* Right: Burger Menu */}
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="text-2xl focus:outline-none"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Dropdown Menu */}
      <nav className={`absolute top-16 right-0 w-full bg-gray-800 p-4 text-center transition-transform duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 text-blue-500 text-sm font-light" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="block py-2 text-blue-500 text-sm font-light" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" className="block py-2 text-blue-500 text-sm font-light" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" className="block py-2 text-blue-500 text-sm font-light" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </div>
    </div>
  );
}
