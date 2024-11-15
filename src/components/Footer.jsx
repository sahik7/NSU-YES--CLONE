import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00132B] to-[#0059A9] text-white px-6 font-poppins ">
      <div className="max-w-screen-xl mx-auto pt-10 grid grid-cols-1 md:grid-cols-5 gap-x-4 w-[90%]">
        
        <div className='col-span-2'>
          <img src="https://nsuyes.org/wp-content/uploads/2022/06/NSU-YES-New-logo-in-png.webp" className="w-[190px] md:w-[100px] md:mx-0 mx-auto" />
          <p className="text-sm md:text-left mx-auto md:mx-0 text-center font-extralight mt-5 leading-relaxed w-[90%]">
            <strong><strong>NSU YES!</strong></strong> is the Premium Business Club of North South University that has been functioning since 1994 with a vision of Student Development and Growth.
          </p>
          <div className="flex space-x-4 mt-4 ">
            <Link href="#" aria-label="Facebook" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-300"><i className="fab fa-instagram"></i></Link>
            <Link href="#" aria-label="YouTube" className="hover:text-gray-300"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>

        <div className='w-[80%] md:w-[100%] md:mx-0 mx-auto grid gap-4 grid-cols-2 col-span-2'>
          {/* activities */}
          <div>
          <h3 className="text-lg font-semibold mb-2">Activities</h3>
            <div className="space-y-2 text-xs flex flex-col">
            <Link to="/events">Events</Link>
            <Link to="">MDPs</Link>
            <Link to="">Gallery</Link>
            <Link to="/publications">Publications</Link>
          </div></div>


           {/* Governing Panel */}
           <div>
          <h3 className="text-lg font-semibold mb-2">Governing Panel</h3>
            <div className="space-y-2 text-xs flex flex-col">
            <Link to="/executive-board">Executive Board</Link>
            <Link to="/sub-executive-board">Sub-Executive Board</Link>
          </div></div>


           {/* Faculty Advisor */}
           <div>
          <h3 className="text-lg font-semibold mb-2">Faculty Advisor</h3>
            <div className="space-y-2 text-xs flex flex-col">
            <Link to="/mirza-m-ferdous">Mirza M. Ferdous</Link>
            <Link to="/previous-advisors">Previous Advisors</Link>
          </div></div>


           {/* Hall Of Fame */}
           <div>
          <h3 className="text-lg font-semibold mb-2">Hall Of Fame</h3>
            <div className="space-y-2 text-xs flex flex-col">
            <Link>Lifelong YES!ers</Link>
            <Link>Executive Legacy</Link>
          </div></div>
          

        </div>



  
            
    
   



        <div className='col-span-1 mt-5 md:mt-0'>
            <div className='text-center'>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email - nsuyesofficial@gmail.com</p>
          <form className="space-y-2 mt-4 mx-auto">
            <div className='md:flex md:justify-between space-y-2 md:space-y-0'>
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 mr-1 py-2 px-4 bg-slate-300/20 rounded text-white text-xs placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 mr-1 py-2 px-4 bg-slate-300/20 rounded text-white text-xs placeholder-gray-300"
            />
            </div>
            <textarea
              placeholder="Message"
              className="w-full mr-1 py-3 px-4 bg-slate-300/20 rounded text-white text-xs placeholder-gray-300"
              rows="3"
            ></textarea>
            <div className='md:text-right'>
            <button
              type="submit"
              className="w-1/2 p-2 bg-[#218ced] rounded font-semibold text-sm uppercase hover:bg-[#1976d2]"
            >
              Send
            </button>
            </div>
          </form>
            </div>
          
        </div>
      </div>

      <div className="text-center text-sm font-semibold mt-8 border-t border-[#365D81] py-4">
        <p className='uppercase tracking-wide text-[#365D81]'>© 2022 – NSU YES!  |  Made by <span className='text-[#4A80A7]'>SAHIK</span></p>
      </div>
    </footer>
  );
}

export default Footer;
