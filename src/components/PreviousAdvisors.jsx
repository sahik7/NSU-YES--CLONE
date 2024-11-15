import React from 'react'
import PreviousItem from './PreviousItem'
import { adivsors } from '../data/advisors'

function PreviousAdvisors() {
  return (
    <div className='font-poppins text-center space-y-5'>
<div className='flex mt-20 items-center gap-2 justify-center my-5 '>
        <span className="border-b border-b-[#09529e] w-6"></span>
        <p className='text-[12px] font-semibold text-[#09529e]'>
        GOVERNING PANEL
            </p>
        <span className="border-b border-b-[#09529e] w-6"></span>
        </div>
        <h1 className=' text-3xl md:text-6xl font-semibold uppercase'>Previous Advisors</h1>
   <p className='text-sm w-4/6 mx-auto'>Exceptional in their own rights, NSU YES! pays homage to these extraordinary individuals that helped shape the very pedestal the club stands on today. We remember their graceful guidance with the most utmost respect.</p>

   <div>
            {adivsors.map((advisor,index) => <PreviousItem advisor={advisor} key={index}/>)}
        </div>
    </div>
  )
}

export default PreviousAdvisors