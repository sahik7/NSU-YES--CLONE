import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function ExecutiveBodyCard({ exItem }) {
    const { img,
        name,
        position,
        description,
        Flink,
        Llink } = exItem
    return (
        <div className='font-poppins overflow-hidden shadow-lg rounded-2xl border'>
            <div className="overflow-hidden h-[35rem]">
                <img
                    className="w-full h-auto "
                    src={img}
                />
            </div>
            <div className="px-6 py-4 text-center">
                <div className="font-semibold  text-2xl mb-2">{name}</div>
                <p className=" text-[#09529e] text-base">
                {position}
                </p>
                <p className='font-light text-sm mt-4 md:w-11/12 md:mx-auto'>{description}</p>
                {/* Socials */}
                <div className='w-1/12 mx-auto mt-10'>
                    <div className='my-5 flex   justify-evenly items-center'>
                        <Link to={Flink} className="text-[#09529e]">
                            <FontAwesomeIcon icon={faFacebookF} className='w-4 h-4 bg-[#09529e]/10 p-2 rounded' />
                        </Link>
                        <Link to={Llink} className="text-[#09529e]">
                            <FontAwesomeIcon icon={faLinkedinIn} className='w-4 h-4 bg-[#09529e]/10 p-2 rounded' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExecutiveBodyCard