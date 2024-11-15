import React from 'react'

function SubBodyCard({ subItem }) {
    const { img,
        name } = subItem
  return (
    <div className='font-poppins overflow-hidden shadow-lg rounded-2xl border'>
            <div className="overflow-hidden h-auto">
                <img
                    className="w-full h-auto"
                    src={img}
                />
            </div>
            <div className="px-6 py-4 text-center">
                <div className="font-semibold  text-2xl mb-2">{name}</div>
            </div>
        </div>
  )
}

export default SubBodyCard