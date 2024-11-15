import React from 'react'
import ExecutiveBodyCard from './ExecutiveBodyCard'
import { exItems23 } from '../data/exBody23-24'


function ExecutiveBody() {
  return (
    <div>
        {/* Full-width Banner */}
      <div className="relative top-9 w-full md:h-[30rem]">
        <img src="https://nsuyes.org/wp-content/uploads/2023/05/Executive-Body-Member-FY-2023-2024-Cover-1024x432.webp" className="w-full h-full object-cover" />
      </div>
      <div className='flex mt-20 items-center gap-2 justify-center my-5 font-poppins'>
        <span className="border-b border-b-[#09529e] w-6"></span>
        <p className='text-[12px] font-semibold text-[#09529e]'>
        GOVERNING PANEL
            </p>
        <span className="border-b border-b-[#09529e] w-6"></span>
        </div>
    <h1 className='text-center text-3xl md:text-6xl font-bold font-poppins'>EXECUTIVE BODY MEMBERS</h1>
    <h1 className='text-center text-lg md:text-xl font-medium mt-3 md:mt-5 font-poppins'>Fiscal Year 2023-2024</h1>

    <div className=" grid md:grid-cols-2 gap-4 my-10 w-11/12 mx-auto">
 {exItems23.map(exItem => <ExecutiveBodyCard exItem={exItem}/>)}
</div>
    
    </div>
  )
}

export default ExecutiveBody