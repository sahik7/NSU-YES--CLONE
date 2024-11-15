import React from 'react';
import { Link } from 'react-router-dom';

function HomeEventsCard({cardItem}) {
    const {img, title,description,highlight,link} = cardItem
  return (
    <div className="rounded-[15px] overflow-hidden shadow-lg my-10">
  <div className="overflow-hidden">
    <img
      className="w-full h-auto hover:scale-125 duration-700"
      src={img}
      alt="Admaker Bangladesh"
    />
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-2xl text-[#09529e] mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      <b>{highlight}</b> {description}
    </p>
    <div className='my-5'>
    <Link to={`${link}`} className="text-sm rounded  py-2 px-5 border border-gray-600 hover:border-[#218ced] hover:text-[#218ced]">
      See More
    </Link>
    </div>
  </div>
</div>
  );
}

export default HomeEventsCard;
