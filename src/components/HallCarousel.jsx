import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';


function HallCarousel({fiscal,exItems = [] }) {
    console.log(exItems)
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
    
      
    
      return (
        <div className="relative w-full md:h-[35rem] h-[60rem] bg-[url('https://nsuyes.org/wp-content/uploads/2024/09/8f600e9e-3d92-4dde-9ecf-53105d16c286.webp')] bg-cover bg-center flex flex-col justify-center text-white">
          <div className="absolute inset-0 bg-black/85 z-0 py-10">
          <div>

          <h1 className='text-center text-3xl md:text-4xl font-semibold font-poppins'>EXECUTIVE BODY MEMBERS</h1>
          <div className='flex items-center gap-2 mt-5 justify-center font-poppins'>
        <span className="border-b border-b-[#218ced] w-6"></span>
        <p className='text-[12px] font-md text-[#218ced]'>
        {fiscal}
            </p>
        <span className="border-b border-b-[#218ced] w-6"></span>
        </div>
          </div>
          </div>
          <Slider {...settings} className="mx-8 md:mx-20 relative inset-0 md:top-12 top-20">
            {exItems.map(item => (
              <div key={item.name} className="md:px-28 md:text-left text-center">
                <div className="border-[.2px] border-gray-500 grid md:grid-cols-10  p-4 rounded-[35px]">
                    {/* image */}
                  <div className="mx-auto md:mx-0 w-full md:w-[16rem] overflow-hidden rounded-2xl md:col-span-4">
                    <img className="w-full h-full object-cover" src={item.img} />
                  </div>
                  {/* text area */}
                  <div className='flex items-center md:col-span-6 mt-5'>
                  <div className='space-y-4 '>
                  <h3 className="text-xl md:text-2xl font-semibold">{item.name}</h3>
                    <p className="font-semibold text-[#6ec1e4] mt-2 text-sm md:mt-0">{item.position}</p>
                    <p className="md:w-11/12 text-sm font-light">{item.description}</p>
                    {/* socials */}
                    <div className='space-x-3'>
                    <Link to={item.Flink} className="text-white" target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} className='w-7 h-7' />
                        </Link>
                    <Link to={item.Flink} className="text-white" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='w-7 h-7' />
                        </Link>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default HallCarousel;
