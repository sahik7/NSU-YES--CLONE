import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HalfCarousel.css';

const HalfCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const items = [
    {
      title: "Merchandiser Product Sourcing and Development at Levi's",
      date: '🗒  October 13, 2022',
      description: "A journey of relentless hard work and passion and emerging victorious from a catacomb of failures, Md Shihabuzzaman is a beacon of versatility. NSU YES! wishes him best wishes for his upcoming triumphs.",
      image: 'https://nsuyes.org/wp-content/uploads/2022/06/Md.-Shihabuzzaman-1024x1024.webp',
    },
    {
      title: 'Territory Officer at BAT',
      date: '🗒  October 24, 2022',
      description: "From an undergraduate with excellent grades and extracurriculars to a woman with wings, this person has pushed for greatness every day. She started her career at 10 Minute School, Marico, and The Daily Star. The Vice President of Marketing & Branding of NSU YES!, Ms. Zeba Fareha Hossain, has earned her position as a Territory Officer at British American Tobacco (BAT) Bangladesh.",
      image: 'https://nsuyes.org/wp-content/uploads/2022/06/Zeba-Fareha-Hossain-1536x1536.webp',
    },
    {
      title: 'Manager - HR & Operations at Fraktal Creative',
      date: '🗒  August 20, 2022',
      description: "NSU YES! is elated to announce that our former Sub-Executive Body Member, Zerin Tasnim Ahsan, has landed the Human Resource & Operations Manager position at Fraktal Creative LLC, a media and creative outlet renowned for delivering supreme content writing services internationally.",
      image: 'https://nsuyes.org/wp-content/uploads/2022/06/Zerin-Tasnim-Ahsan-1024x1024.webp',
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center text-white">
      <Slider {...settings} className="mx-8 md:mx-10 relative">
        {items.map(item => (
          <div key={item.title} className="px-12">
            <div className="border-[.2px] border-gray-500 custom-grid py-16 md:px-6 px-2 rounded-xl">
              <div className="w-[23vh] h-[23vh] md:w-[21vh] md:h-[21vh] overflow-hidden rounded mx-auto">
                <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
              </div>
              <div className='space-y-4 text-center md:text-left'>
                <p className="font-semibold text-blue-500 mt-4 md:mt-0">{item.date}</p>
                <h3 className="text-xl md:text-3xl font-semibold">{item.title}</h3>
                <p className="md:w-10/12 font-light">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HalfCarousel;
