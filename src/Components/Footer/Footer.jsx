import React from 'react'
import spidey from '../../Assets/Images/spidey.jpg'


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='bg-[#12141e] pt-12'>
      {/* Footer top */}
      <div className="container">
        <div className="sm:flex items-center justify between md:gap=8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
            Also, do have a look at my Blog!
            </h2>
            <a href="#">
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] '>
              <i class="ri-send-plane-line"></i>Go to Blog!
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Hey, I'm glad you took the time to go through my work and actually looked across the site, thank you. Have a good day! 
            </p>

            <div 
                className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                <span className='text-gray-300 text-[15px] font-[600]'>
                Connect with me:
                </span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33]  p-1 rounded-[50px] cursor-pointer text-center'>
                    <a href='https://www.linkedin.com/in/amankumar1402/' 
                    className='text-gray-300 text-[18px] font-[500] '>
                        <i class="ri-linkedin-box-fill"></i></a>
                </span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                    <a href='https://github.com/ak14aman' 
                    className='text-gray-300 text-[18px] font-[500]'>
                        <i class="ri-github-fill"></i></a>
                </span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                    <a href='https://www.instagram.com/ak14aman' 
                    className='text-gray-300 text-[18px] font-[500]'>
                        <i class="ri-instagram-line"></i></a>
                </span>
                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                    <a href='https://www.facebook.com/profile.php?id=100037520656634' 
                    className='text-gray-300 text-[18px] font-[500]'>
                        <i class="ri-facebook-circle-fill"></i></a>
                </span>
            </div>
          </div>
        </div>

        <div >
                    <ul className='flex items-center justify-center gap-10 mt-10'>
                        <li>
                            <a className='text-gray-400 font-[600] hover:text-gray-100' href="#about">About</a>
                        </li>
                        <li>
                            <a className='text-gray-400 font-[600] hover:text-gray-100' href="#timeline">Timeline</a>
                        </li>
                        <li>
                            <a className='text-gray-400 font-[600] hover:text-gray-100' href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className='text-gray-400 font-[600] hover:text-gray-100' href="#experience">Experience</a>
                        </li>
                        <li>
                            <a className='text-gray-400 font-[600] hover:text-gray-100' href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>

      </div>

      {/* Footer top end */}

      {/* footer Bottom */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>
                <img
                    src={spidey}
                    class="h-auto max-w-full rounded-full"
                    alt="..." />
                </span>

                <div className="leading-[20px] ">
                  <h2 className='text-gray-200 font-[500] text-[18px]'>
                    Aman Kumar
                  </h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>
                    Portfolio @v1
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400 text-[14px] '>Copyright {<i class="ri-copyright-line"></i>} {year} developed by { <a href="#about" className='hover:text-white underline underline-offset-2' >ak14aman</a>} - All rights reserved.</p>
            </div>

          </div>
        </div>
      </div>
      {/* footer Bottom end*/}

    </footer>
  )
}

export default Footer
