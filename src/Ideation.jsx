import React from 'react'
import CommonEvents from './components/CommonEvents';

const eventData = {
  bannerImage: "https://nsuyes.org/wp-content/uploads/2022/06/Masters-of-Ideation-organized-by-NSU-YES.webp",
  title: "Masters Of Ideation",
  description: {
       part1: "For the first time in its 25 year-long legacy, NSU YES! will be hosting its strategic business case-solving competition online. The arena is set for Masters of Ideation, the battle for supremacy.",
      part2: "One of the most prestigious case solving competitions is back for opportunities of cognitive and analytical thinking. Masters of Ideation is all set to kick-start a brand new expedition with an aim to create a stimulating experience for the business competition. Undergraduate students all across the nation will join their intellect to come out victorious in the ultimate business battle. The event consists of four rounds; each more arduous than the former. The rounds have been designed to tackle every aspect of marketing so that the participants can get a glimpse of the practical world. Universities from all across the nation present their ideas to reputed and prominent judges from the industry who give meticulous feedback and nurtures the ideas to maximize participant’s learning."
  },
  videoUrl: "https://www.youtube.com/embed/cie2KlXUYJI?autoplay=1&si=QCFba50x_3pqR3aE",
  eventImage: [],
};

function Ideation() {
  return (
    <div><CommonEvents event={eventData}/></div>
  )
}

export default Ideation