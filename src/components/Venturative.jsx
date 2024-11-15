import React from 'react'
import CommonEvents from './CommonEvents'

const eventData = {
    bannerImage: "https://nsuyes.org/wp-content/uploads/2022/07/Venturative.webp",
    title: "Venturative",
    description: {
         part1: "Venturing into the unknowns of Entrepreneurship can be risky. Only those who look past the hurdles can ascend to the peak. Grab your opportunity to access the right guidance from the experts and master their art. It's time for you to take hold of the new wave and pioneer the change.",
        part2: "It is a holistic entrepreneurial webinar, focusing on showcasing the most desirable traits of emerging entrepreneurs of Bnagladesh among the student body."
    },
    videoUrl: "https://www.youtube.com/embed/41mJsvm2AH0?autoplay=1&si=BUnLzgiB4vVQ4nGK",
    eventImage: [],
  };

function Venturative() {
  return (
    <div>
        <CommonEvents event={eventData}/>
    </div>
  )
}

export default Venturative