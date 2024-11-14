import React from 'react'
import AffiliateItems from './AffiliateItems'

function Affiliates() {
  return (
    <div>
<div className='flex items-center gap-2 justify-center'>
        <span className="border-b border-b-[#218ced] w-4"></span>
        <p className='text-[12px] font-semibold uppercase text-[#218ced]'>
        Affiliates
            </p>
        <span className="border-b border-b-[#218ced] w-4"></span>
        </div>
    <h1 className='text-center md:text-7xl text-4xl font-bold my-4 uppercase'>Our Affiliates</h1>
    <AffiliateItems/>
    </div>
  )
}

export default Affiliates