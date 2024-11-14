import React from 'react'
import HalfCarousel from './HalfCarousel'

function Latest() {
  return (
    <div
      className="relative w-full md:h-[1000px] h-[1200px] text-white bg-[url('https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2024/11/07/whatsapp_image_2024-11-06_at_21.49.28_f6eec5a4.jpg')] bg-fixed bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 font-poppins h-full z-10 relative">
        <div className="flex items-center">
          <div className="space-y-3 flex flex-col items-center text-center justify-center">
            <div className="flex items-center gap-2">
              <span className="border-b-2 border-b-[#218ced] w-4"></span>
              <span className="text-[#218ced] text-sm font-semibold">NEWS</span>
              <span className="border-b-2 border-b-[#218ced] w-4"></span>
            </div>
            <h1 className="text-6xl font-bold">LATEST NEWS</h1>
            <p className="w-[70%]">
              Take a look at the recent activities that have been taking place within NSU YES!
            </p>
          </div>
        </div>
        <div>
          <HalfCarousel />
        </div>
      </div>
    </div>
  )
}

export default Latest
