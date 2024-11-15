import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { Link } from 'react-router-dom';

function CurrentFaculty() {
  return (
    <div className='font-poppins'>
        <div className="relative top-9 w-full h-[30rem]">
  <img 
    src="https://nsuyes.org/wp-content/uploads/2023/04/Faculty-Advior-of-NSU-YES-scaled.jpg" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h2 className="text-white text-4xl md:text-7xl font-semibold">Mirza M. Ferdous</h2>
  </div>
</div>

{/* body */}
<div className='grid md:grid-cols-2 gap-6 my-24 w-10/12 md:h-[40rem] mx-auto'>
<div className="md:w-11/12 overflow-hidden rounded-xl relative group">
  <img
    className="w-full h-auto"
    src="https://nsuyes.org/wp-content/uploads/2023/04/Faculty-Advisor_Mirza-M.-Ferdous-1193x1536.jpg"
    alt="Faculty Advisor"
  />
  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <Link className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4' to="https://www.northsouth.edu/faculty-members/sbe/acc-fin/mzf.html" target="_blank">
          <FontAwesomeIcon
            icon={faUniversity}
            className="text-white text-xl hover:text-gray-300"
          />
        </Link>
  </div>
</div>
    <div>
    <div className='w-11/12 flex justify-start items-center gap-3 mb-2'>
                <span className='w-9 border-b-2 border-[#09529e]'></span>
                <p className=' text-sm font-semibold text-[#09529e] uppercase'>Mirza M. Ferdous</p>
            </div>
            <h1 className='md:text-5xl text-3xl mx-auto font-semibold mb-5 uppercase'>Faculty Advisor of NSU YES!</h1>
            <p className='md:w-[90%] font-light '>NSU YES! is a community that values a corporate mindset and is dedicated to developing the skills necessary to succeed in the business world. Its members are composed of ambitious individuals who are eager to learn, grow, and make a difference in the world. Leading this exceptional organization is the esteemed faculty advisor, Mr. Mirza M. Ferdous, a highly respected business professional with years of experience and expertise and a strong sense of decisiveness.
<br />
<br />
Mr. Ferdous is currently serving as a Senior Lecturer in the Department of Accounting and Finance at North South University. He is a man of great erudition and eloquence, having completed his MBA from Carnegie Mellon University and his BSc from George Washington University in the United States of America. With his passion for mentoring and his knack for developing the next generation of business leaders, Mr. Ferdous is the perfect fit for the YES! community. His exceptional ability to simplify complex concepts and create an engaging learning environment ensures that every member of the community is inspired to reach their full potential.</p> 
    </div>
</div>
    </div>
  )
}

export default CurrentFaculty