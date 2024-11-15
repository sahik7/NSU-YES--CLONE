import React from 'react'
import SubBodyCard from './SubBodyCard'
import { subItems } from '../data/subItems'

function SubBody() {
  return (
    <div className='font-poppins'>
        <div>
        {/* Full-width Banner */}
      <div className="relative top-9 w-full md:h-[30rem]">
        <img src="https://nsuyes.org/wp-content/uploads/2022/06/NSU-YES-Slide-1.webp" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-2xl md:text-6xl font-semibold uppercase">Sub-executive Board</h2>
        </div>
      </div>
      <div className='flex mt-20 items-center gap-2 justify-center my-5 font-poppins'>
        <span className="border-b border-b-[#09529e] w-6"></span>
        <p className='text-[12px] font-semibold text-[#09529e]'>
        GOVERNING PANEL
            </p>
        <span className="border-b border-b-[#09529e] w-6"></span>
        </div>
    <h1 className='text-center text-3xl md:text-5xl font-semibold font-poppins'>EXECUTIVE BODY MEMBERS</h1>
    <h1 className='text-center text-lg md:text-2xl font-medium mt-3 md:mt-5 font-poppins'>Annual Year 2023</h1>

    <div className="my-10 w-10/12 md:w-8/12 mx-auto space-y-4 md:space-y-10">
 {subItems.map(subItem => <SubBodyCard subItem={subItem}/>)}
</div>
    
    </div>
    </div>
  )
}

export default SubBody