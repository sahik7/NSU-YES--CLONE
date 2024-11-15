import React from 'react'

function PreviousItem({ advisor }) {
    const {img , name, year} = advisor
    return (
        <div className='font-poppins overflow-hidden shadow-lg rounded-2xl border md:w-1/3 w-10/12 mx-auto my-16 group'>
            <div className="relative overflow-hidden h-auto">
    <img
      className="w-full h-auto"
      src={img}
      alt="Profile"
    />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
            <div className="px-6 py-4 text-center">
                <div className="font-semibold  text-2xl mb-2">{name}</div>
                <p className='font-semibold text-[#09529e] text-md'>{year}</p>
            </div>
        </div>
    )
}

export default PreviousItem