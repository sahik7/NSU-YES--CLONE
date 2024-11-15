import React from 'react'
import CommonEvents from './CommonEvents';

const eventData = {
    bannerImage: "https://nsuyes.org/wp-content/uploads/2022/06/Entrepret-organized-by-NSU-YES.-scaled.webp",
    title: "Entrepret",
    description: {
         part1: "“Entrepret- Crafting Visions” is a platform for bright and young future entrepreneurs of Bangladesh. The competition nurtures potentially groundbreaking ideas under the mentorship of renowned venture capitalist and angel investors so that the idea becomes a sustainable and scalable business in the real world.",
        part2: "Through different challenges in every round, starting from business model development, integrated marketing activities and careful financial planning to long term scalability and attractive offers to the investors. Entrepret allows the future leaders to prepare their ideas for real world implementation. The winners of the competition get further incubation and technical support from industry experts."
    },
    videoUrl: "https://www.youtube.com/embed/jVI1haHLzNY?autoplay=1&si=jPaqZW--ILaK1NVX",
    eventImage: [
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-11-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-10-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-5-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-9-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-4-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-2-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-3-scaled.webp",
      "https://nsuyes.org/wp-content/uploads/2022/07/Entrepret-6-scaled.webp",
    ],
  };

function Entrepret() {
  return (
    <div>
        <CommonEvents event={eventData}/>
    </div>
  )
}

export default Entrepret