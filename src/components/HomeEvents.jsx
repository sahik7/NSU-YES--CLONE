import React from 'react'
import HomeEventsCard from './HomeEventsCard'
export const cardItems = [
    {
        img:"https://nsuyes.org/wp-content/uploads/2022/06/Ad-Maker-Bangladesh-by-NSU-YES.webp",
        title:"Admaker Bangladesh",
        description:"The Competition received recognition for being the largest and the most competitive inter-university 360-degree marketing competition.",
        highlight:"Inter University Marketing Competition ",
        link:""

    },
    {
        img:"https://nsuyes.org/wp-content/uploads/2022/06/Venturative-by-NSU-YES.webp",
        title:"Venturative",
        description:"It is a holistic entrepreneurial webinar, focusing on showcasing the most desirable traits of emerging entrepreneurs of Bangladesh among the student body.",
        highlight:"GUIDE TO PIONEERISM. ",
        link:""

    },
    {
        img:"https://nsuyes.org/wp-content/uploads/2022/06/Entrepret-Crafting-Visions-by-NSU-YES-1-1.webp",
        title:"Entrepret",
        description:"The competition nurtures potentially groundbreaking ideas under the mentorship of renowned venture capitalist and angel investors.",
        highlight:"INTER UNIVERSITY ENTREPRENEURIAL COMPETITION ",
        link:""

    },
]

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