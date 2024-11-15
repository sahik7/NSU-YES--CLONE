import React from 'react'
import BrochuresCarousel from './BrochuresCarousel'

function Publications() {
  return (
    <div className='font-poppins'>
        {/* Full-width Banner */}
        <div className="relative w-full h-[20rem]">
  <img 
    src="https://nsuyes.org/wp-content/uploads/2022/06/Publication-by-NSU-YES.webp" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h2 className="text-white text-4xl md:text-6xl font-medium">Publication</h2>
  </div>
</div>

{/* Brochure Part */}
<div className='grid md:grid-cols-2 md:py-20 my-10 md:mt-0'>

{/* Right Part */}
<div className='text-center space-y-4 my-5' >
<div className='gap-2'>
        <p className='text-[12px] font-semibold text-[#09529e]'>
        ABOUT
            </p>
        </div>
    <h1 className=' text-5xl font-semibold md:my-0 my-4'>PUBLICATIONS</h1>
    <div>
        <p className='text-sm w-10/12 mx-auto leading-6 md:leading-8'>
        Welcome to the, ever so humbling, Cases and Publications Department of NSU YES! Here we forage through students to draft into our ranks the most avid writers and arm them with all the skills and adaptability impertinent to them so that they may flourish if they ever choose to write professionally in the future. We seek to motivate the future generations of members to become better and more confident composers and accoutre them with the necessary aptness, appropriacy and a formidable perspicuity about their field. It is our job to help hone their skills to perfection. So join the battle of the pens today!</p>
    </div>
</div>

{/* Left Part */}
<div className='md:my-0 my-4'>
<div className='flex items-center gap-2 justify-center'>
        <p className='text-[12px] font-semibold text-[#09529e]'>
        BROCHURES
            </p>
        </div>
    <h1 className='text-center text-5xl font-semibold mt-4'>BROCHURES</h1>
    <div className='w-10/12 mx-auto'>
    <BrochuresCarousel />
    </div>
</div>
</div>
    </div>
  )
}

export default Publications