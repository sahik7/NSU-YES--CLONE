import React from 'react'
import CommonEvents from './components/CommonEvents';

const eventData = {
  bannerImage: "https://nsuyes.org/wp-content/uploads/2022/06/Admaker-Bangladesh-organized-by-NSU-YES.webp",
  title: "AD MAKER BANGLADESH",
  description: {
       part1: "Ad Maker Bangladesh is the flagship event of NSU YES! Since its advent in 2011, Ad Maker Bangladesh has received recognition for being the first of its kind, the largest and the most competitive inter-university 360 degree marketing competition. Undergraduates from any background can showcase their abilities to design a full-fledged integrated marketing competition(IMC) campaign, blending brand management, promotions, marketing research, marketing channels and everything related. ",
      part2: "The event consists of four rounds; each more arduous than the former. The rounds have been designed to tackle every aspect of marketing so that the participants can get a glimpse of the practical world. Universities from all across the nation present their ideas to reputed and prominent judges from the industry who give meticulous feedback and nurtures the ideas to maximize participant’s learning."
  },
  videoUrl: "https://www.youtube.com/embed/LQW95o7vdZ0?autoplay=1&si=UJPMHiZDAXpkcmn3",
  eventImage: [
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-1-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-2-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-3-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-4-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-5-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-6-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-7-1-scaled.webp",
    "https://nsuyes.org/wp-content/uploads/2022/07/Ad-Maker-8-1-scaled.webp",
  ],
};


function Admaker() {
  return (
    <div><CommonEvents event={eventData}/></div>
  )
}

export default Admaker