import React from 'react'
import BrochuresCarousel from './BrochuresCarousel'

function Brochures() {
  return (
    <div>
<div className='flex items-center gap-2 justify-center'>
        <span className="border-b border-b-[#218ced] w-4"></span>
        <p className='text-[12px] font-semibold uppercase text-[#218ced]'>
        Brochures
            </p>
        <span className="border-b border-b-[#218ced] w-4"></span>
        </div>
    <h1 className='text-center text-4xl font-bold mt-4 uppercase'>Brochures</h1>
    <BrochuresCarousel/>
    </div>
  )
}

export default Brochures