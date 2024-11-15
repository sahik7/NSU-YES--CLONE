import React from 'react'
import HomeEventsCard from './HomeEventsCard'
import { cardItems } from '../data/cardItems'


function HomeEvents() {

    


  return (
    <div>
        <div className='flex items-center gap-2 justify-center'>
        <span className="border-b border-b-[#218ced] w-4"></span>
        <p className='text-[12px] font-semibold text-[#218ced]'>
            EVENTS
            </p>
        <span className="border-b border-b-[#218ced] w-4"></span>
        </div>
    <h1 className='text-center text-4xl font-bold mt-4'>RECENT EVENTS</h1>
    <div className='w-11/12 mx-auto py-10'>
        {cardItems.map(cardItem => <HomeEventsCard cardItem={cardItem}/>)}
        
    </div>

    </div>
  )
}

export default HomeEvents