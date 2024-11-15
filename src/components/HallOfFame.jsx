import React from 'react'
import HallCarousel from './HallCarousel'
import { exItems23 } from '../data/exBody23-24';
import { exItems22 } from '../data/exBody22-23';
import { exItems21 } from '../data/exBody21-22';
import { exItems19 } from '../data/exBody19-20';

function HallOfFame() {
  return (
    <div className='font-poppins'>
        {/* Full-width Banner */}
        <div className="relative top-9 w-full h-[20rem]">
  <img 
    src="https://nsuyes.org/wp-content/uploads/2024/09/Artboard-2@4x-1.png" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className='text-center'>
    <h2 className="text-[#09529e] text-3xl md:text-7xl font-semibold">HALL OF FAME</h2>
    <p className=" text-sm font-light my-4 w-10/12 md:w-full mx-auto">Time can be temporary but exceptional work has the power to create a lasting legacy.</p>
    </div>
  </div>
</div>
<div className='space-y-16'>
    <HallCarousel exItems={exItems23} fiscal={"Fiscal Year 2023-2024"}/>
    <HallCarousel exItems={exItems22} fiscal={"Fiscal Year 2022-2023"}/>
    <HallCarousel exItems={exItems21} fiscal={"Fiscal Year 2020-2021"}/>
    <HallCarousel exItems={exItems19} fiscal={"Fiscal Year 2019-2020"}/>

</div>
    </div>
  )
}

export default HallOfFame