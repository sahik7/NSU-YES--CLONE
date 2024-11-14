import React from 'react';

function HomeEventsCard({cardItem}) {
    const {img, title,description,highlight} = cardItem
  return (
    <div className='rounded-[15px] overflow-hidden shadow-lg my-10'>
      <img
        className="w-full h-auto rounded-se-[15px]"
        src={img}
        alt="Admaker Bangladesh"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl text-[#09529e] mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          <b>{highlight}</b>
          {description}
        </p>
        <button className='text-sm rounded mt-5 py-2 px-5 border border-gray-600 hover:border-[#218ced] hover:text-[#218ced]'>
          See More
        </button>
      </div>
    </div>
  );
}

export default HomeEventsCard;
