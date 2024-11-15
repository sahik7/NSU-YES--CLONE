import React from 'react'
import HomeEventsCard from './components/HomeEventsCard'
import { cardItems } from './data/cardItems'

function EventsPage() {
  return (
    <div >
       <div className="font-poppins">
        <img 
            src="https://nsuyes.org/wp-content/uploads/2022/06/NSU-YES-all-events.jpg" 
            alt="Event" 
            className="object-cover object-top md:object-none  w-full h-full" 
        />
        <div className='py-6'>
    <div className="flex items-center gap-2 justify-center mt-5">
        <span className="border-b border-b-[#218ced] w-4"></span>
        <p className="text-[12px] font-semibold text-[#218ced]">
          EVENTS
        </p>
        <span className="border-b border-b-[#218ced] w-4"></span>
      </div>
        <h1 className='md:text-6xl text-4xl font-bold text-center mt-5'>RECENT EVENTS</h1>
        <div className='w-9/12 mx-auto mt-10'>
        {cardItems.map((cardItem,index) => <HomeEventsCard cardItem={cardItem} key={index}/>)}
        </div>
        </div>
    </div>
    </div>
  )
}

export default EventsPage