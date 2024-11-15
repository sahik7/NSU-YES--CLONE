import React from 'react'
import CommonEvents from './components/CommonEvents';


const eventData = {
  bannerImage: "https://nsuyes.org/wp-content/uploads/2022/06/NSUers-Meet-Corporate-NSU-YES.webp",
  title: "Nsuers Meet Corporate Icons",
  description: {
       part1: "The only intra-university event hosted by NSU YES! NSUers Meet Corporate Icons (NMCI), comprises several rounds of seminars conducted by specialists of the industry, with a view to enlightening the young minds about the corporate culture and providing them with necessary guidance. ",
      part2: "Since 2010 NMCI has highlighted modern and on-going business topics that impact global citizens. The undergraduate students get the opportunity to meet the best personage and have an interactive Q/A session to gain valuable insight of the corporate dimensions."
  },
  videoUrl: "https://www.youtube.com/embed/HAISn6g1ShU?autoplay=1&si=0JjnlUDq3fVYrdqX",
  eventImage: [],
};

function CorporateIcons() {
  return (
    <div><CommonEvents event={eventData}/></div>
  )
}

export default CorporateIcons