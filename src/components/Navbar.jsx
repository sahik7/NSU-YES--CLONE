import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,faXmark,faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isGoverningOpen, setGoverningOpen] = useState(false);
  const [isFacultyOpen, setFacultyOpen] = useState(false);
  const [isEventsOpen, setEventsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNestedOpen, setNestedOpen] = useState(false);
  const [isNestedFacultyOpen, setNestedFacultyOpen] = useState(false);

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

      <div>
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-white text-white">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold mt-4 ml-5">
          <img src="https://i.ibb.co/vszJ5w8/NSU-YES-New-logo-in-png-ezgif-com-webp-to-png-converter.png" alt="Logo" className="w-14 h-14" />
        </Link>

        {/* Right: Burger Menu */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none text-[#09529e] mr-8 mt-2" 
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark}/> :  <FontAwesomeIcon icon={faBars} />}
        </button>

        {/* Dropdown Menu */}
        <nav className={`absolute top-24 right-0 w-full bg-white p-4 text-left transition-transform duration-300 font-semibold space-y-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink to="/" className="ml-8 block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Activities</NavLink>
          <NavLink to="/about" className="ml-8 block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Events</NavLink>

          <div className="relative ml-8">
            <button
              onClick={() => setNestedOpen(!isNestedOpen)}
              className="block py-2 text-[#09529e] text-sm font-semibold w-full text-left"
            >
              Governing Panel <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isNestedOpen && (
              <div className="bg-white py-2 mt-2 w-full">
                <NavLink to="/executive-board" className="block py-2 text-[#09529e] text-sm " onClick={() => setMenuOpen(false)}>Executive Board</NavLink>
                <NavLink to="/sub-executive-board" className="block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Sub Executive Board</NavLink>
              </div>
            )}
          </div>

          <div className="relative ml-8">
            <button
              onClick={() => setNestedFacultyOpen(!isNestedFacultyOpen)}
              className="block py-2 text-[#09529e] text-sm font-semibold w-full text-left"
            >
              Faculty Advisors <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isNestedFacultyOpen && (
              <div className="bg-white py-2 mt-2 w-full">
                <NavLink to="/mirza-m-ferdous" className="block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Mirza M. Ferdous</NavLink>
                <NavLink to="/previous-advisors" className="block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Previous Advisors</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/contact" className="ml-8 block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Publications</NavLink>
          <NavLink to="/contact" className="ml-8 block py-2 text-[#09529e] text-sm" onClick={() => setMenuOpen(false)}>Hall Of Fame</NavLink>
        </nav>
      </div>
    </div>
    </div>
  );
}
