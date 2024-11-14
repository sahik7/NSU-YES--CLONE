import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function AboutUs() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#about') {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);
  return (
    <div id='about' className='grid md:grid-cols-2 sm:grid-cols-1 px-5 font-poppins items-center my-24 md:my-32'>
        <div>
            <img className='w-[80%] mx-auto' src="https://i.ibb.co/vszJ5w8/NSU-YES-New-logo-in-png-ezgif-com-webp-to-png-converter.png" alt="" />
        </div>
        <div className='text-center md:text-left mx-auto'>
            <div className='flex justify-center md:justify-start items-center gap-3 mb-2'>
                <span className='w-9 border-b-2 border-[#09529e]'></span>
                <p className=' text-sm font-bold text-[#09529e]'>ABOUT US</p>
                <span className='w-9 block md:hidden border-b-2 border-[#09529e]'></span>
            </div>
            <h1 className='text-7xl mx-auto font-semibold mb-5'>NSU YES!</h1>
            <p className='md:w-[90%] text-center md:text-left'>Founded in 1994, NSU YES! is one the top tier business clubs in Bangladesh, under the School of Business and Economics department of North South University. This student-run organization is highly acclaimed for its exceptional member base, a long line of outstanding alumni, and organizing successful events.
<br />
<br />
In all its brilliance, NSUers Meet Corporate Icons (NMCI) and Entrepret are two prominent events of NSU YES!. Moreover, Masters of Ideation, “The Battle For Supremacy” alongside Ad Maker Bangladesh, the flagship event also known as “The Creative Fight” of NSU YES! are executed on a national level. One of the most recent additions to the categories of events hosted by the club is Corporate Insights. Alongside these events, NSU YES! also launched and organized several others such as Entrepreneurs Fair, Haatbazar, Escalate, etc.
<br />
<br />

In this journey of excellence, different organizations all across Bangladesh like Banglalink, Robi Axiata, British American Tobacco Bangladesh, Unilever Bangladesh, Marico Bangladesh, etc, have been offering their unfailing support through partnership and collaborations.</p>
            <div className='flex items-center gap-4 mt-5'>
                <span  className='h-10 border-l-[3px] border-[#09529e]'></span>
                <p className='text-md font-semibold'>Follow Us</p>
                <div className='flex gap-4'>
                <span  className='h-6 border-l-[1px] border-[#09529e]'></span>
                    <Link><img className='w-[100%]' src="https://i.ibb.co.com/SKhGg5f/Artboard-2-copy-2.png" alt="" /></Link>
                <span  className='h-6 border-l-[1px] border-[#09529e]'></span>
                    <Link><img className='w-[88%]' src="https://i.ibb.co.com/4KxSFy4/Artboard-2-copy-3.png" alt="" /></Link>
                <span  className='h-6 border-l-[1px] border-[#09529e]'></span>
                    <Link><img className='w-[98%]' src="https://i.ibb.co.com/vQ5n8bj/Artboard-2-copy.png" alt="" /></Link>
                <span  className='h-6 border-l-[1px] border-[#09529e]'></span>
                    <Link><img src="https://i.ibb.co.com/1LsLzt3/Artboard-2.png" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs